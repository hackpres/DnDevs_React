const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    savedCards: [Card]!
    attack: Int
    defense: Int
    health: Int
    gender: String
    avatar: String
    wins: Int
    losses: Int
  }

  type Card {
    _id: ID!
    name: String!
    description: String!
    modifier: String!
    value: Int!
    value2: Int
    codeSnippet: String!
    shopDescription: String!
  }
  type Auth {
    token: ID!
    user: User
  }
  type Bosses {
    name: String!
    attack: Int!
    heal: Int!
  }
  input CardInput {
    name: String!
    description: String!
    modifier: String!
    value: Int!
    value2: Int
    codeSnippet: String!
    shopDescription: String!
  }
  type Query {
    me: User
    bosses: [Bosses]!
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addCard(userId: ID!, card: CardInput!): User
    removeUser(userId: ID!): User
    addGender(userId: ID!, gender: String!): User
    changeAvatar(avatar: String!): User
    addWin(userId: ID!, wins: Int!): User
    addLoss(userId: ID!losses: Int!): User
  }
`;

module.exports = typeDefs;
