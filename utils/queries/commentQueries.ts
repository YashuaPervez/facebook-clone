import { gql } from "@apollo/client";

export const createCommentMutation = gql`
  mutation CreateComment($postId: Int!, $text: String!) {
    createComment(data: { postId: $postId, text: $text }) {
      id
      text
      author {
        profile {
          imageURL
          displayName
        }
      }
    }
  }
`;

export const getPostCommentsQuery = gql`
  query GetPOstCommentsQuery($postId: Int!, $pageNumber: Int!) {
    getPostComments(postId: $postId, pageNumber: $pageNumber) {
      moreAvailable
      comments {
        id
        text
        author {
          profile {
            displayName
            imageURL
          }
        }
      }
    }
  }
`;
