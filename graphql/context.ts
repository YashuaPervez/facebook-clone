import { PrismaClient } from "@prisma/client";
import { getUserId } from "./utils/function";
import prisma from "../lib/prisma";

export type ContextUser = {
  isLoggedIn: boolean;
  userId: number | null;
};

export type Context = {
  prisma: PrismaClient;
  user: ContextUser;
};

async function createContext({ req }: any): Promise<Context> {
  const user: ContextUser = {
    isLoggedIn: false,
    userId: null,
  };
  const userId = await getUserId(req);
  if (userId) {
    user.userId = userId;
    user.isLoggedIn = true;
  }
  return {
    prisma,
    user,
  };
}

export default createContext;
