
const {gql} = require('apollo-server-express');
const typeDefs = gql `
    type User{
        _id:ID
        username: String!
        attack: Int
        defense: Int
        health: Int
    }

    type Card{
        cardId: ID!
        name: String!
        description: String
        active: Boolean
    }
    type Auth{
        token: ID!
        user: User
    }
    type Bosses{
        name: String!
        attack: Int!
        defense: Int!

    }

    type Query{
        me: User
        bosses: [Bosses]!
        users: [User]!
    }

    type Mutation{
        addUser(username: String!, password:String!): Auth
        login(username: String!, password: String!): Auth
    }

`;




module.exports = typeDefs;
