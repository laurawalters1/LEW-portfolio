const { User, BlogPost } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    getMe: async (parent, args, context) => {
      const user = await User.findById(context.user._id);
      return user;
    },
    getBlogPosts: async () => {
      const blogPosts = await BlogPost.find();

      return blogPosts;
    },
  },
  Mutation: {
    addAdminUser: async (_, args) => {
      const user = await User.create(args);
      // generate token
      const token = signToken(user);
      return { token, user };
    },
    loginAdminUser: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError("Username not found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }
      const token = signToken(user);

      return { token, user };
    },

    addBlogPost: async (_, args) => {
      const blogPost = await BlogPost.create(args);
      // generate token

      return blogPost;
    },
  },
};

module.exports = resolvers;
