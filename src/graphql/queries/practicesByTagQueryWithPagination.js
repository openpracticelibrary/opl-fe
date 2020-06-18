import { gql } from 'apollo-boost';

/*
 * GET_PRACTICES_BY_TAG returns all OPL Practices for a specific Tag name (not ID).
 */
const GET_PRACTICES_BY_TAG_PAGINATION = gql`
  query PracticesByTag($start: Int, $limit: Int, $tag: [String]) {
    practices (start: $start, limit: $limit, where: {tags: {tag_in: $tag}}) {
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

export default GET_PRACTICES_BY_TAG_PAGINATION;