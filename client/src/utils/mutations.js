import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CARD = gql`
  mutation AddCard($userId: ID!, $card: CardInput!) {
    addCard(userId: $userId, card: $card) {
      _id
      username
      savedCards {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_GENDER = gql`
mutation AddGender($userId: ID!, $gender: String!) {
  addGender(userId: $userId, gender: $gender) {
    username
    gender
  }
}



`
