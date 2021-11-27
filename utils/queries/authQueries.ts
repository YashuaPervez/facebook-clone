import { gql } from "@apollo/client";

const userFullProfile = `
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
  moreAvailable
  posts {
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
      moreAvailable
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
`;

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
      user {
        ${userFullProfile}
      }
    }
  }
`;

export const getUserProfileQuery = gql`
  query {
    me {
      ${userFullProfile}
    }
  }
`;
