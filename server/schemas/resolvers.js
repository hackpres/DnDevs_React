import { User, Bosses } from "../models/index.js";
import { AuthenticationError } from "apollo-server-express";
import { signToken } from "../utils/auth.js";
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const starterCards = require("../seeders/starterCards.json");
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({
          _id: context.user._id,
        });
        // .select("-__v -password");

        // return userData;
      }
      throw new AuthenticationError("Not Logged In");
    },
    bosses: async () => {
      return Bosses.find();
    },
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create({ ...args, savedCards: starterCards });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No profile with this username found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    addCard: async (parent, { userId, card }) => {
      // return;
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $push: { savedCards: card },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
    
    addWin: async (parent, { userId, wins}, context) => {
     
        return User.findOneAndUpdate(
          { _id: userId },
          { $set: { wins: wins } },
          {
            new: true,
            runValidators: true,
          }
        );
      
    },
    addLoss: async (parent, {userId, losses}, context) => {
     
        return User.findOneAndUpdate(
          { _id: userId},
          { $set: { losses: losses } },
          {
            new: true,
            runValidators: true,
          }
        );
      
    },
    changeAvatar: async (parent, { avatar}, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $set: { avatar: avatar } },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("Not Logged In");
    },
  },
};

export default resolvers;
