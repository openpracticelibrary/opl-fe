import { gql } from 'apollo-boost';

const GET_PRACTICE_LIST = gql`
  query Practices {
    practices {
      id
      slug
      coverImage
      title
      tags {
        tag
      }
      subtitle
      updatedAt
      upvotes
      mediaGallery {
        link
      }
      ama {
        question
      }
    }
  }
`;

export default GET_PRACTICE_LIST;
