import {gql} from '@apollo/client';

export const QUERY_PROFILES = gql`

query users {
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
query user($userId: ID!) {
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
export const QUERY_PROFILE = gql`
query Me {
  me {
    username
    savedCards {
      name
      description
    }
    wins
    losses
  }
}
`

export const QUERY_ME = gql`
query User {
  me {
    _id
    username
  }
}
`;

export const QUERY_CARDS = gql`
query Users {
  me {
    savedCards {
      name
      description
      modifier
      codeSnippet
      shopDescription
      value
      value2
    }
  }
}
`;

export const QUERY_BOSSES = gql`
query Bosses {
  bosses {
    name
    attack
    heal
  }
}
`;

export const QUERY_BATTLE = gql`

query User {
  me {
    _id
    username
    savedCards {
      name
      description
      modifier
      value
      value2
      codeSnippet
      shopDescription
    }
    wins
    losses
  }
  bosses {
    name
    attack
    heal
  }
}
`;