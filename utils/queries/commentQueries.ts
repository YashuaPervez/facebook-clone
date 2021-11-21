import { gql } from "@apollo/client";

export const createCommentMutation = gql`
  mutation CreateComment($postId: Int!, $text: String!) {
    createComment(data: { postId: $postId, text: $text }) {
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
