import { gql } from "@apollo/client";

export const createPostMutation = gql`
  mutation CreatePost($title: String!, $image: Upload) {
    createPost(data: { title: $title, image: $image }) {
      id
    }
  }
`;
