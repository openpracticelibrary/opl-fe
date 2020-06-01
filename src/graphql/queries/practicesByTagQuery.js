import { gql } from 'apollo-boost';

const GET_PRACTICES_BY_TAG = gql`
  query PracticesByTag($tag: String!) {
    practices (where: {tags: {tag_eq: $tag}}) {
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

export default GET_PRACTICES_BY_TAG;