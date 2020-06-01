import { gql } from "apollo-boost";

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
