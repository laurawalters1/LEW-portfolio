const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
  }
  type UserAuth {
    # should the token be an ID? or a string?
    token: ID!
    user: User
  }

  type BlogPost {
    title: String!
    body: String!
  }

  type Query {
    getMe: User!
    getBlogPosts: [BlogPost]
  }

  type Mutation {
    addAdminUser(
      username: String!
      password: String!
      admin: Boolean!
    ): UserAuth
    loginAdminUser(username: String!, password: String!): UserAuth
    addBlogPost(title: String!, body: String!, featured: Boolean): BlogPost
  }
`;
module.exports = typeDefs;
