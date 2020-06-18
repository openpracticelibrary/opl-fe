import { gql } from "apollo-boost";

const UPDATE_PRACTICE_RESOURCES = gql`
  mutation modifyPracticeResources($practiceId: ID!, $newResources: [editComponentPracticeBodyResourceInput]!) {
    updatePractice (
      input: {
        where: {id: $practiceId},
        data: {
          resources: $newResources
        }
      }
    ) {
      practice {
        id
        slug
        resources {
          id
          link
          linkType
          description
        }
      }
    }
  }
`;

export default UPDATE_PRACTICE_RESOURCES;