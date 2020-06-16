import { gql } from "apollo-boost";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    singleUpload(file: $file) {
      url
    }
  }
`;

export default UPLOAD_FILE;
