import { gql } from "apollo-boost";

const UPDATE_PRACTICE = gql`
  mutation updatePractice(
    $practiceId: ID!,
    $title: String!,
    $subtitle: String!,
    $whatIs: String!,
    $whyDo: String!,
    $howTo: String!
  ) {
    updatePractice(
      input: {
        where: {
          id: $practiceId
        },
        data: {
          title: $title,
          subtitle: $subtitle,
          body: {
            whatIs: $whatIs,
            whyDo: $whyDo,
            howTo: $howTo
          }
        }
      }
    ) {
      practice {
        id
        title
        subtitle
        body {
          whatIs
          whyDo
          howTo
        }
      }
    }
  }
`;

export default UPDATE_PRACTICE;
