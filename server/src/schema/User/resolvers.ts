import type { Resolvers } from "@generated/types";
import { generateJWT } from "@lib/jwt";
import { User, IUser } from "@models/index";
import { AuthenticationError } from "apollo-server-core";
import { hash, compare } from "bcrypt";

export const resolvers: Resolvers = {
  Query: {
    Users: async (_, __) => {
      return await User.find();
    },
  },
  Mutation: {
    submitData: async (_, { input }) => {
      const user: IUser = await User.create(input);
      return user;
    },
  },
};
