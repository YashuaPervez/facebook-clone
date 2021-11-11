import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server-core";
import prisma from "../../lib/prisma";

export const hashPassword = async (password: string): Promise<string> => {
  if (password.length < 8) {
    throw new Error("Password must be atleast 8 characters long");
  }

  return await bcrypt.hash(password, 10);
};

export const generateToken = async (userId: number): Promise<string> => {
  const token = jwt.sign({ userId }, process.env.TOKEN_SECRET!);

  await prisma.token.create({
    data: {
      token,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  return token;
};

export const getUserId = async (request: any): Promise<number | false> => {
  const header = request?.headers?.authorization;

  if (!header) {
    return false;
  }

  const token = header.replace("Bearer ", "");
  let decoded;

  type JwtPayload = {
    userId: number;
  };

  try {
    decoded = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload;
  } catch (e) {
    return false;
  }

  const tokenObj = await prisma.token.findFirst({
    where: {
      userId: decoded.userId,
      token: token,
    },
  });

  if (!tokenObj) {
    return false;
  }

  return decoded.userId;
};

export const authRequired = (userId: number | null) => {
  if (!userId) {
    throw new AuthenticationError("Invalid Token");
  }
};
