import {
  objectType,
  extendType,
  inputObjectType,
  nonNull,
  stringArg,
  intArg,
} from "nexus";
import slugify from "slugify";
import bcrypt from "bcryptjs";
import { AuthenticationError, UserInputError } from "apollo-server-core";

import {
  hashPassword,
  generateToken,
  authRequired,
  saveFile,
} from "../utils/function";
import { PostsWithMoreAvailable } from "./Post";
import { Profile } from "./Profile";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("username");
    t.nonNull.string("email");
    t.nonNull.string("createdAt");
    t.nonNull.string("updatedAt");
    t.nonNull.field("wallPosts", {
      type: PostsWithMoreAvailable,
      async resolve(parent, _args, ctx) {
        const wallPosts = await ctx.prisma.post.findMany({
          where: { postForId: parent.id },
          orderBy: {
            createdAt: "desc",
          },
          take: 3,
        });
        const totalPosts = await ctx.prisma.post.count({
          where: { postForId: parent.id },
        });

        return {
          moreAvailable: totalPosts > 3,
          posts: wallPosts.map((post) => ({
            ...post,
            createdAt: post.createdAt.getTime().toString(),
            updatedAt: post.updatedAt.getTime().toString(),
          })),
        };
      },
    });
    t.nonNull.field("profile", {
      type: Profile,
      async resolve(parent, _args, ctx) {
        const profile = await ctx.prisma.profile.findFirst({
          where: { userId: parent.id },
        });

        if (!profile) {
          throw new Error("Profile not found");
        }

        return profile;
      },
    });
  },
});

/* ================
RETURN TYPES
================= */
export const UserWithToken = objectType({
  name: "UserWithToken",
  definition(t) {
    t.nonNull.string("token");
    t.nonNull.field("user", { type: User });
  },
});

/* ================
INPUTS
================= */
export const SignupUserInputs = inputObjectType({
  name: "SignupUserInputs",
  definition(t) {
    t.nonNull.string("username");
    t.nonNull.string("email");
    t.nonNull.string("password");
  },
});

export const LoginUserInputs = inputObjectType({
  name: "LoginUserInputs",
  definition(t) {
    t.nonNull.string("email");
    t.nonNull.string("password");
  },
});

export const UpdateProfileInput = inputObjectType({
  name: "UpdateProfileInput",
  definition(t) {
    t.string("displayName");
    t.string("imageURL");
    t.string("about");
    t.string("interests");
    t.string("workPlace");
    t.string("location");
  },
});

/* ================
QUERY
================= */
export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    /* ================
      GET USER BY ID
      ================= */
    t.nonNull.field("getUserById", {
      type: User,
      args: {
        userId: nonNull(intArg()),
      },
      async resolve(_parent, args, ctx) {
        const { userId } = args;
        const user = await ctx.prisma.user.findUnique({
          where: { id: userId },
        });

        if (!user) {
          throw new Error("No user found with provided userId");
        }
        return {
          ...user,
          createdAt: user.createdAt.getTime().toString(),
          updatedAt: user.updatedAt.getTime().toString(),
        };
      },
    });

    /* ================
      GET USER BY USERNAME
      ================= */
    t.nonNull.field("getUserByUsername", {
      type: User,
      args: {
        username: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        const { username } = args;
        const user = await ctx.prisma.user.findUnique({ where: { username } });

        if (!user) {
          throw new Error("No user found with provided username");
        }
        return {
          ...user,
          createdAt: user.createdAt.getTime().toString(),
          updatedAt: user.updatedAt.getTime().toString(),
        };
      },
    });

    /* ================
      SEARCH USER
      ================= */
    t.nonNull.list.field("searchUsers", {
      type: User,
      args: {
        resultsPerPage: nonNull(intArg()),
        pageNo: nonNull(intArg()),
        query: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        const { resultsPerPage, pageNo, query } = args;

        if (query.length < 3) {
          throw new UserInputError("Query must be atleast 3 characters long");
        }
        if (resultsPerPage < 1 || pageNo < 1) {
          throw new UserInputError(
            "Page number and results per page must be atleast 1"
          );
        }

        const toSkip = resultsPerPage * (pageNo - 1);

        //Searching for users
        const users = await ctx.prisma.user.findMany({
          skip: toSkip,
          take: resultsPerPage,
          where: {
            OR: [
              {
                username: {
                  contains: query,
                  mode: "insensitive",
                },
              },
              {
                profile: {
                  OR: [
                    {
                      displayName: {
                        contains: query,
                        mode: "insensitive",
                      },
                    },
                    {
                      about: {
                        contains: query,
                        mode: "insensitive",
                      },
                    },
                  ],
                },
              },
            ],
          },
        });

        return users.map((user) => ({
          ...user,
          createdAt: user.createdAt.getTime().toString(),
          updatedAt: user.updatedAt.getTime().toString(),
        }));
      },
    });

    t.nonNull.field("me", {
      type: User,
      async resolve(_parent, _args, ctx) {
        const userId = ctx.user.userId;
        authRequired(userId);

        const user = await ctx.prisma.user.findUnique({
          where: { id: userId || 0 },
        });

        return {
          ...user,
          createdAt: user?.createdAt.getTime().toString(),
          updatedAt: user?.updatedAt.getTime().toString(),
        };
      },
    });
  },
});

/* ================
MUTATION
================= */
export const UserMutation = extendType({
  type: "Mutation",
  definition(t) {
    /* ================
    SIGN UP
    ================= */
    t.nonNull.field("signup", {
      type: UserWithToken,
      args: {
        data: nonNull(SignupUserInputs),
      },
      async resolve(_parent, args, ctx) {
        const { username, email, password } = args.data;

        const hashedPassword = await hashPassword(password);

        // Checking Email is available
        const emailTaken = await ctx.prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (emailTaken) {
          throw new UserInputError("Email already taken");
        }

        // Generating unique username
        let usernameSuffix = null;
        const sluggedUsername = slugify(username, {
          lower: true,
        });
        let uniqueUsername = sluggedUsername;
        let uniqueUsernameFound = false;

        while (!uniqueUsernameFound) {
          let usernameToCheck;
          if (usernameSuffix === null) {
            usernameToCheck = sluggedUsername;
            usernameSuffix = 2;
          } else {
            usernameToCheck = `${sluggedUsername}-${usernameSuffix}`;
            usernameSuffix++;
          }
          const usernameTaken = await ctx.prisma.user.findFirst({
            where: { username: usernameToCheck },
          });
          if (!usernameTaken) {
            uniqueUsername = usernameToCheck;
            uniqueUsernameFound = true;
          }
        }

        const user = await ctx.prisma.user.create({
          data: {
            username: uniqueUsername,
            email,
            password: hashedPassword,
            profile: {
              create: {
                displayName: username,
                imageURL:
                  "https://www.back-tobasics.org/wp-content/uploads/2017/05/default-profile-pic.png",
              },
            },
          },
        });

        const token = await generateToken(user.id);

        return {
          token,
          user: {
            ...user,
            createdAt: user.createdAt.getTime().toString(),
            updatedAt: user.updatedAt.getTime().toString(),
          },
        };
      },
    });

    /* ================
    LOGIN
    ================= */
    t.nonNull.field("login", {
      type: UserWithToken,
      args: {
        data: nonNull(LoginUserInputs),
      },
      async resolve(_parent, args, ctx) {
        const { email, password } = args.data;

        const user = await ctx.prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (!user) {
          throw new UserInputError("User with provided email do not exists");
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          throw new UserInputError("Password for provided user do not match");
        }

        const token = await generateToken(user.id);

        return {
          token,
          user: {
            ...user,
            createdAt: user.createdAt.getTime().toString(),
            updatedAt: user.updatedAt.getTime().toString(),
          },
        };
      },
    });

    /* ================
    LOGOUT
    ================= */
    t.nonNull.field("logout", {
      type: "String",
      async resolve(_parent, _args, ctx) {
        const { userId } = ctx.user;
        if (!userId) {
          authRequired(userId);
          return "";
        }

        await ctx.prisma.token
          .deleteMany({
            where: {
              userId,
            },
          })
          .then(() => {});

        return "Logged out successfully";
      },
    });

    /* ================
    UPDATE PROFILE
    ================= */
    t.nonNull.field("updateProfile", {
      type: User,
      args: {
        data: nonNull(UpdateProfileInput),
      },
      async resolve(_parent, args, ctx) {
        const { userId } = ctx.user;
        if (!userId) {
          throw new AuthenticationError("Authentication required");
        }
        const updatedUser = await ctx.prisma.profile.update({
          where: { userId },
          data: {
            about: args.data.about,
            displayName: args.data.displayName || undefined,
            imageURL: args.data.imageURL,
            interests: args.data.interests,
            workPlace: args.data.workPlace,
            location: args.data.location,
          },
        });
        const user = await ctx.prisma.user.findUnique({
          where: { id: userId },
        });

        if (!user) {
          throw new Error("No user found with provided ID");
        }

        // const { password, ...restUser} = user;

        return {
          ...user,
          createdAt: user.createdAt.getTime().toString(),
          updatedAt: user.updatedAt.getTime().toString(),
        };
      },
    });

    /* ================
    UPDATE PROFILE PICTURE
    ================= */
    t.nonNull.field("updateProfilePicture", {
      type: "String",
      args: {
        image: nonNull("Upload"),
      },
      async resolve(_parent, args, ctx) {
        const { userId } = ctx.user;
        authRequired(userId);

        const { image } = args;
        const imageURL = await saveFile(image, "uploads/images");

        const updateUser = await ctx.prisma.profile.update({
          data: {
            imageURL,
          },
          where: {
            userId: userId || 0,
          },
        });

        return imageURL || "";
      },
    });

    /* ================
    UPDATE COVER IMAGE
    ================= */
    t.nonNull.field("updateCoverImage", {
      type: "String",
      args: {
        image: nonNull("Upload"),
      },
      async resolve(_parent, args, ctx) {
        const { userId } = ctx.user;
        authRequired(userId);

        const { image } = args;
        const imageURL = await saveFile(image, "uploads/images");

        const updateUser = await ctx.prisma.profile.update({
          data: {
            coverImageURL: imageURL,
          },
          where: {
            userId: userId || 0,
          },
        });

        return imageURL || "";
      },
    });
  },
});
