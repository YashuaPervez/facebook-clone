import { gql } from "@apollo/client";

export const createPostMutation = gql`
  mutation CreatePost($title: String!, $image: Upload) {
    createPost(data: { title: $title, image: $image }) {
      id
    }
  }
`;

export const toggleLikeMutation = gql`
  mutation ToggleLike($postId: Int!) {
    toggleLike(postId: $postId)
  }
`;
