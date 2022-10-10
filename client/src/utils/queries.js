import {gql} from '@apollo/client';

export const QUERY_PROFILES = gql`

query Users {
    users {
      _id
      username
      savedCards {
        _id
        name
      }
    }
  }
`;
export const QUERY_SINGLE_USER = gql`
query User($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      savedCards {
        _id
        name
      }
    }
  }
`


export const QUERY_ME = gql`
query Me {
    me {
      _id
      username
      savedCards {
        _id
        name
      }
    }
  }
`;