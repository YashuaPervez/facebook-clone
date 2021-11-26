import { objectType, extendType, inputObjectType, nonNull } from "nexus";
import { AuthenticationError } from "apollo-server-core";

import { User } from "./User";
import { CommentWithMoreAvailable } from "./Comment";
import { Like } from "./Like";
import { saveFile } from "../utils/function";

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
    t.boolean("liked", {
      async resolve(parent, _args, ctx) {
        const userId = ctx.user.userId;
        if (!userId) {
          return null;
        }

        const liked = await ctx.prisma.like.findFirst({
          where: {
            userId,
            postId: parent.id,
          },
        });

        return !!liked;
      },
    });
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
    t.nonNull.field("comments", {
      type: CommentWithMoreAvailable,
      async resolve(parent, _args, ctx) {
        const comments = await ctx.prisma.comment.findMany({
          where: {
            postId: parent.id,
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 3,
        });
        const totalComments = await ctx.prisma.comment.count({
          where: {
            postId: parent.id,
          },
        });

        return {
          comments: comments.map((com) => ({
            ...com,
            createdAt: com.createdAt.getTime().toString(),
            updatedAt: com.updatedAt.getTime().toString(),
          })),
          moreAvailable: totalComments > 3,
        };
      },
    });
    t.nonNull.list.field("likes", {
      type: Like,
      async resolve(parent, _args, ctx) {
        const likes = await ctx.prisma.like.findMany({
          where: {
            postId: parent.id,
          },
        });

        return likes.map((like) => ({
          ...like,
          createdAt: like.createdAt.getTime().toString(),
          updatedAt: like.updatedAt.getTime().toString(),
        }));
      },
    });
  },
});

export const CreatePostInputs = inputObjectType({
  name: "CreatePostInputs",
  definition(t) {
    t.nonNull.string("title");
    t.field({
      name: "image",
      type: "Upload",
    });
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

        const { title, image } = args.data;
        const postObject: PostType = {
          title,
          authorId: ctx.user.userId!,
          postForId: ctx.user.userId!,
        };
        if (image) {
          const imageURL = await saveFile(image, "uploads/images");
          if (imageURL) {
            postObject.imageURL = imageURL;
          }
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
