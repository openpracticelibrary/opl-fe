import { gql } from "apollo-boost";

/*
 * CREATE_TAG is a GraphQL mutation that creates an empty Tag component with just the provided tag name but 
 * no Practice relationships.
 */
const CREATE_TAG = gql`
  mutation createTag($tagName: String!) {
    createTag ( 
      input: { 
    	  data: {
          tag: $tagName
          practices: []
        }
      }
    ) {
      tag {
        id
        tag
      }
    }
  }
`;

export default CREATE_TAG;
