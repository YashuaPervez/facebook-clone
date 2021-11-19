import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import prisma from "../../lib/prisma";

type GetServerSidePropsReturnProps = any;

export type User = any;

const withAuth = (
  handler: (
    context: GetServerSidePropsContext,
    user: User | null,
    token: string
  ) => Promise<GetServerSidePropsResult<GetServerSidePropsReturnProps>>
) => {
  return async (context: GetServerSidePropsContext) => {
    const token = context.req.cookies["fb-clone-auth-token"];
    let user = null;

    if (token) {
      user = await prisma.user.findFirst({
        where: {
          tokens: {
            some: {
              token,
            },
          },
        },
        select: {
          id: true,
          email: true,
          username: true,
          profile: {
            select: {
              about: true,
              displayName: true,
              imageURL: true,
              coverImageURL: true,
              interests: true,
            },
          },
          myPosts: {
            select: {
              id: true,
              title: true,
              imageURL: true,
              author: {
                select: {
                  username: true,
                  email: true,
                  profile: {
                    select: {
                      displayName: true,
                      imageURL: true,
                    },
                  },
                },
              },
            },
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      });
    }

    return await handler(context, user, token);
  };
};

export default withAuth;
