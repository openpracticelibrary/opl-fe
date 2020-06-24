import { gql } from "apollo-boost";

/*
 * CREATE_AMA_QUESTION is a GraphQL mutation that creates an empty Question component with the provided 
 * question text and originator info, but with no Practice relationships.
 */
const CREATE_AMA_QUESTION = gql`
  mutation createAmaQuestion(
    $question: String!,
    $questionerName: String!,
    $questionerEmail: String!
  ) {
    createQuestion ( 
      input: { 
    	  data: {
          question: $question
          questionerName: $questionerName
          questionerEmail: $questionerEmail
        }
      }
    ) {
      question {
        id
        question
        questionerName
        questionerEmail
      }
    }
  }
`;

export default CREATE_AMA_QUESTION;
