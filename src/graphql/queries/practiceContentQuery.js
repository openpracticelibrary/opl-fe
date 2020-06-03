import { gql } from 'apollo-boost';

const GET_PRACTICE_PAGE = gql`
  query Practice($slug: String!) {
    practices(where: { slug: $slug }) {
      id
      slug
      title
      subtitle
      authors {
        id
        firstName
        lastName
        mediaLink
      }
      body {
        whyDo
        whatIs
        howTo
        fullText
      }
      createdAt
      updatedAt
      resources {
        description
        linkType
        link
      }
      upvotes
      coverImage
      mediaGallery {
        link
      }
      ama {
        question
        answers {
          answer
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export default GET_PRACTICE_PAGE;
