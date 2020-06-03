import { gql } from "apollo-boost";

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
