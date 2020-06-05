import { gql } from 'apollo-boost';

const GET_CONTRIBUTORS = gql`
  query Contributors {
    users {
      id
    }
  }
`;

export default GET_CONTRIBUTORS;

