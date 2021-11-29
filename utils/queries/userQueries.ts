import { gql } from "@apollo/client";

export const updateProfileMutation = gql`
  mutation UpdateProfile(
    $displayName: String
    $about: String
    $interests: String
    $location: String
    $workPlace: String
  ) {
    updateProfile(
      data: {
        displayName: $displayName
        about: $about
        interests: $interests
        workPlace: $workPlace
        location: $location
      }
    ) {
      id
      profile {
        displayName
        imageURL
        about
        interests
        location
        workPlace
        coverImageURL
      }
    }
  }
`;

export const searchUsersQuery = gql`
  query SearchUser($pageNo: Int!, $query: String!) {
    searchUsers(resultsPerPage: 4, pageNo: $pageNo, query: $query) {
      moreAvailable
      users {
        id
        username
        profile {
          displayName
          about
          imageURL
          interests
        }
      }
    }
  }
`;

export const uploadProfilePictureMutation = gql`
  mutation UploadProfilePicture($image: Upload!) {
    updateProfilePicture(image: $image)
  }
`;

export const uploadCoverImageMutation = gql`
  mutation UploadCoverImage($image: Upload!) {
    updateCoverImage(image: $image)
  }
`;

export const getUserByUsernameQuery = gql`
  query GetUserByUsername($username: String!) {
    getUserByUsername(username: $username) {
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
    }
  }
`;
