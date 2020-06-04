import { gql } from "apollo-boost";

/*
 * MODIFY_PRACTICE_TAGS is a GraphQL mutation that adds and/or removes Practice-Tag associations by manipulating 
 * the tags collection of an individual Practice as identified by its ID, not its title or slug.  
 * In modifying the tags collection of the Practice, it causes the corresponding practices collection in associated
 * Tags to be updated as well.
 */
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
