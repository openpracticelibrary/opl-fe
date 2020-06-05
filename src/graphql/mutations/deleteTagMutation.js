import { gql } from "apollo-boost";

/*
 * DELETE_TAG is a GraphQL mutation that deletes a Tag by its ID, not its tag name. 
 * It automatically removes any Practice-Tag associations that include the deleted Tag.
 */
const DELETE_TAG = gql`
  mutation deleteTag($tagId: String!) {
    deleteTag ( input: { 
      	where: {
          id: $tagId
        }
      }
    ) 
    {
      tag {
        id 
        tag
      }
    }
  }
`;

export default DELETE_TAG;
