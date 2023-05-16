import { gql } from "@apollo/client";

// TODO - add authentication token here

// login user
// export const LOGIN_USER = gql`
//   mutation loginUser($email: String!, $password: String!) {
//     loginUser(email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;
// login user
export const LOGIN_ADMIN_USER = gql`
  mutation loginAdminUser($username: String!, $password: String!) {
    loginAdminUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
