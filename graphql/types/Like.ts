import { objectType, extendType, nonNull, intArg } from "nexus";

import { User } from "./User";
import { Post } from "./Post";
import { authRequired } from "../utils/function";

export const Like = objectType({
  name: "Like",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("createdAt");
    t.nonNull.string("updatedAt");
    t.nonNull.field("liker", {
      type: User,
      async resolve(parent, _args, ctx) {
        const liker = await ctx.prisma.user.findFirst({
          where: {
            likes: {
              some: {
                id: parent.id,
              },
            },
          },
        });

        if (!liker) {
          throw new Error("Unable to find liker for provided like");
        }

        return {
          ...liker,
          createdAt: liker.createdAt.getTime().toString(),
          updatedAt: liker.updatedAt.getTime().toString(),
        };
      },
    });
    t.nonNull.field("post", {
      type: Post,
      async resolve(parent, _args, ctx) {
        const post = await ctx.prisma.post.findFirst({
          where: {
            likes: {
              some: {
                id: parent.id,
              },
            },
          },
        });

        if (!post) {
          throw new Error("Unable to find post for provided like");
        }

        return {
          ...post,
          createdAt: post.createdAt.getTime().toString(),
          updatedAt: post.updatedAt.getTime().toString(),
        };
      },
    });
  },
});

export const LikeQuery = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("toggleLike", {
      type: "Boolean",
      args: {
        postId: nonNull(intArg()),
      },
      async resolve(_parent, args, ctx) {
        const userId = ctx.user.userId;
        authRequired(userId);

        // Checking previous like status
        const alreadyLiked = await ctx.prisma.like.findFirst({
          where: {
            userId: userId || 0,
            postId: args.postId,
          },
          select: {
            id: true,
          },
        });

        if (!alreadyLiked) {
          // Like the post
          const like = await ctx.prisma.like.create({
            data: {
              userId: userId || 0,
              postId: args.postId,
            },
            select: {
              id: true,
            },
          });
          return true;
        } else {
          // Dislike the post
          const dislike = await ctx.prisma.like.deleteMany({
            where: {
              userId: userId || 0,
              postId: args.postId,
            },
          });
          return false;
        }
      },
    });
  },
});
