import { gql } from "apollo-boost";

// This query should only be run on the in-memory cache on the client.
const currentUserQuery = gql`
  {
    jwt @client
  }
`;

export default currentUserQuery;

