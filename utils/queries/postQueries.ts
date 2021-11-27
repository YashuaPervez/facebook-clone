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

export const getUserPostsQuery = gql`
  query GetUserPosts($userId: Int!, $pageNumber: Int!) {
    getUserPosts(userId: $userId, pageNumber: $pageNumber) {
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
  }
`;
