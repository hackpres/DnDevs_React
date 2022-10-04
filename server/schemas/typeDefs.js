
const {gql} = require('apollo-server-express');
const typeDefs = gql `
    type User{
        _id:ID!
        username: String!
        savedCards:[Card]
    }

    type Card{
        name: String!
        description: String
        active: Boolean
    }

    type Bosses{
        name: String!
        attack: Int!
        defense: Int!

    }

    type Query{
        me: User
        bosses: [Bosses]!
    }

`;




module.exports = typeDefs;
