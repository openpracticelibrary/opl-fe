import { gql } from "apollo-boost";

const LIKE_PRACTICE = gql`
  mutation upvotes($practiceId: ID!, $upvotes: Int) {
    updatePractice(
      input: { where: { id: $practiceId }, data: { upvotes: $upvotes } }
    ) {
      practice {
        id
        upvotes
      }
    }
  }
`;

export default LIKE_PRACTICE;
