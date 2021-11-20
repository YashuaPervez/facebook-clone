import { objectType, extendType, inputObjectType, nonNull } from "nexus";

import { User } from "./User";
import { Post } from "./Post";
import { authRequired } from "../utils/function";

export const Comment = objectType({
  name: "Comment",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("text");
    t.nonNull.string("createdAt");
    t.nonNull.string("updatedAt");
    t.nonNull.field("author", {
      type: User,
      async resolve(parent, _args, ctx) {
        const author = await ctx.prisma.user.findFirst({
          where: {
            comments: {
              some: {
                id: parent.id,
              },
            },
          },
        });

        if (!author) {
          throw new Error("Unable to find author for provided comment");
        }

        return {
          ...author,
          createdAt: author.createdAt.getTime().toString(),
          updatedAt: author.updatedAt.getTime().toString(),
        };
      },
    });
    t.nonNull.field("post", {
      type: Post,
      async resolve(parent, _args, ctx) {
        const post = await ctx.prisma.post.findFirst({
          where: {
            comments: {
              some: {
                id: parent.id,
              },
            },
          },
        });

        if (!post) {
          throw new Error("Unable to find post for provided comment");
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

export const CreateCommentInputs = inputObjectType({
  name: "CreateCommentInputs",
  definition(t) {
    t.nonNull.int("postId");
    t.nonNull.string("text");
  },
});

export const CommentQuery = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createComment", {
      type: Comment,
      args: {
        data: nonNull(CreateCommentInputs),
      },
      async resolve(_parent, args, ctx) {
        const userId = ctx.user.userId;
        authRequired(userId);

        const comment = await ctx.prisma.comment.create({
          data: {
            text: args.data.text,
            postId: args.data.postId,
            userId: userId || 0,
          },
        });

        return {
          ...comment,
          createdAt: comment.createdAt.getTime().toString(),
          updatedAt: comment.updatedAt.getTime().toString(),
        };
      },
    });
  },
});
