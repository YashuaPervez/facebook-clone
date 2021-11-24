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

export const getUserProfileQuery = gql`
  query {
    me {
      id
      username
      email
      profile {
        displayName
        imageURL
        about
        interests
        coverImageURL
        workPlace
        location
      }
      wallPosts {
        id
        title
        imageURL
        createdAt
        liked
        author {
          id
          username
          profile {
            displayName
            imageURL
          }
        }
        comments {
          id
          text
          createdAt
          author {
            id
            username
            profile {
              displayName
              imageURL
            }
          }
        }
        likes {
          createdAt
          liker {
            id
            username
            profile {
              displayName
              imageURL
            }
          }
        }
      }
    }
  }
`;
