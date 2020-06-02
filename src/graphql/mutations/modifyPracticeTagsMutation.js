import { gql } from "apollo-boost";

const MODIFY_PRACTICE_TAGS = gql`
  mutation modifyPracticeTags($practiceId: ID!, $newTags: [ID]!) {
    updatePractice (
      input: { 
        where: {id: $practiceId},
      	data: {
          tags: $newTags
        }
      }
    ) {
      practice {
        id
        slug
        tags { tag }
      }
    }
  }
`;

export default MODIFY_PRACTICE_TAGS;
