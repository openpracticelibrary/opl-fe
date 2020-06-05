import { gql } from 'apollo-boost';

const GET_CURATED_PRACTICES = gql`
query GetTopEightPopularPractices($limit: Int!){
    practices(sort: "upvotes:desc", limit: $limit){
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

export default GET_CURATED_PRACTICES;