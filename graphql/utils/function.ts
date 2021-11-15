import fs from "fs";
import { finished } from "stream/promises";
import { v4 as uuid } from "uuid";
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

type File = {
  createReadStream: () => any;
  mimetype: string;
  filename: string;
};

export const saveFile = async (
  file: Promise<File>,
  path: string = "uploads"
): Promise<string | null> => {
  const { createReadStream, mimetype, filename } = await file;
  const supportedMimes = ["png", "jpg", "jpeg"];

  if (!createReadStream || !mimetype || !filename) return null;
  const fileExtension = mimetype.split("/")[1];

  if (!supportedMimes.includes(fileExtension)) {
    throw new Error("Unsupported file type");
  }

  const stream = createReadStream();

  const newFileName = uuid();

  if (path.startsWith("/")) {
    path = path.substring(1);
  }
  if (path.endsWith("/")) {
    path = path.substring(0, path.length - 1);
  }

  const filePath = `${path}/${newFileName}.${fileExtension}`;

  const out = fs.createWriteStream(`public/${filePath}`);
  stream.pipe(out);
  await finished(out);

  return `${process.env.SERVER_URL}/${filePath}`;
};
