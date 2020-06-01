import { gql } from 'apollo-boost';

const GET_TAGS = gql`
  query Tags {
    tags {
      id
      tag
    }
  }
`;

export default GET_TAGS;