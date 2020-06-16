import { gql } from "apollo-boost";

const UPDATE_MEDIA_GALLERY = gql`
  mutation modifyPracticeTags($practiceId: ID!, $newGallery: [editComponentPracticeBodyMediaGalleryInput]!) {
    updatePractice (
      input: {
        where: {id: $practiceId},
        data: {
          mediaGallery: $newGallery
        }
      }
    ) {
      practice {
        id
        slug
        mediaGallery {
          link
        }
      }
    }
  }
`;

export default UPDATE_MEDIA_GALLERY;

