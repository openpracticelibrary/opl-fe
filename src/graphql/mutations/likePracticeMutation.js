import { gql } from "apollo-boost";

const LIKE_PRACTICE = gql`
  mutation upvotes($practiceId: ID!, $upvotes: Int) {
    updatePractice(
      input: { where: { id: $practiceId }, data: { upvotes: $upvotes } }
    ) {
      practice {
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
  }
`;

export default LIKE_PRACTICE;
