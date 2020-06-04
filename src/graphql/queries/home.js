import { gql } from 'apollo-boost';

const GET_EIGHT_POPULAR_PRACTICES = gql`
query GetTopEightPopularPractices{
    practices(sort: "upvotes:desc", limit: 8){
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

export default GET_EIGHT_POPULAR_PRACTICES;