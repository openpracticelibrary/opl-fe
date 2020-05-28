import { gql } from 'apollo-boost';

const GET_PRACTICES = gql`
  query Practices {
    practices {
      title
      slug
      id
      coverImage
      subtitle
      upvotes
      mediaGallery {
        link
      }
      ama {
        question
      }
      tags {
        tag
      }
    }
  }
`;

export default GET_PRACTICES;