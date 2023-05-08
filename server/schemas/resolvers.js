const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      return "hello";
    },
  },
};

module.exports = resolvers;
