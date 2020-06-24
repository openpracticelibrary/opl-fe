import { gql } from "apollo-boost";

/*
 * MODIFY_PRACTICE_AMAS is a GraphQL mutation that adds and/or removes Practice-Question associations by  
 * manipulating the AMA collection of an individual Practice as identified by its ID, not its title or slug.  
 */
const MODIFY_PRACTICE_AMAS = gql`
    updatePractice (
      input: {
        where: {id: $practiceId},
        data: {
          ama: $newQuestions
        }
      }
    ) {
      practice {
        id
        slug
        ama {
          id
          question
        }
      }
    }
  }
`;

export default MODIFY_PRACTICE_AMAS;
