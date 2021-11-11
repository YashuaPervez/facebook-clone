import { gql } from "@apollo/client";

export const createPostMutation = gql`
  mutation CreatePost($title: String!) {
    createPost(data: { title: $title }) {
      id
    }
  }
`;
