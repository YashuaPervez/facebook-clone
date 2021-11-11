import { objectType, extendType, inputObjectType, nonNull } from "nexus";
import { AuthenticationError } from "apollo-server-core";

import { User } from "./User";

export type PostType = {
  title: string;
  imageURL?: string;
  authorId: number;
  postForId: number;
};

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("title");
    t.string("imageURL");
    t.nonNull.string("createdAt");
    t.nonNull.string("updatedAt");
    t.nonNull.field("author", {
      type: User,
      async resolve(parent, _args, ctx) {
        const author = await ctx.prisma.user.findFirst({
          where: { createdPosts: { some: { id: parent.id } } },
        });

        if (!author) {
          throw new Error("Author not found");
        }

        return {
          ...author,
          createdAt: author.createdAt.getTime().toString(),
          updatedAt: author.updatedAt.getTime().toString(),
        };
      },
    });
  },
});

export const CreatePostInputs = inputObjectType({
  name: "CreatePostInputs",
  definition(t) {
    t.nonNull.string("title");
    t.string("imageURL");
  },
});

export const PostQuery = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createPost", {
      type: Post,
      args: {
        data: nonNull(CreatePostInputs),
      },
      async resolve(_parent, args, ctx) {
        if (!ctx.user.isLoggedIn) {
          throw new AuthenticationError("Authentication required");
        }

        const { title, imageURL } = args.data;
        const postObject: PostType = {
          title,
          authorId: ctx.user.userId!,
          postForId: ctx.user.userId!,
        };
        if (imageURL) {
          postObject.imageURL = imageURL;
        }

        const post = await ctx.prisma.post.create({
          data: postObject,
        });

        return {
          ...post,
          createdAt: post.createdAt.getTime().toString(),
          updatedAt: post.updatedAt.getTime().toString(),
        };
      },
    });
  },
});
