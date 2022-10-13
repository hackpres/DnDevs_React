const { Bosses, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const starterCards = require("../seeders/starterCards.json");
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await user
          .findOne({
            _id: context.user_id,
          })
          .select("-__v -password");

        return userData;
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
      const user = await User.create({...args, savedCards: starterCards});
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
  },
};

module.exports = resolvers;
