import { gql } from "apollo-boost";

const LOGIN = gql`
  mutation Login($identifier: String!, $password: String!) {
    login(
      input: { identifier: $identifier, password: $password }
    ) {
      jwt
    }
  }
`;

export default LOGIN;
