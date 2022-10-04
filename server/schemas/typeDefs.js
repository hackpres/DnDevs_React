import {gql} from 'apollo-server-express';

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


    type Query{
        me: User
    }

`;




export default typeDefs;
