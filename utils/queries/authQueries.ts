import { gql } from "@apollo/client";

export const signupMutation = gql`
  mutation Signup($email: String!, $password: String!, $username: String!) {
    signup(data: { email: $email, password: $password, username: $username }) {
      token
    }
  }
`;

export const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
    }
  }
`;
