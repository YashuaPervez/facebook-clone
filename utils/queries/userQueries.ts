import { gql } from "@apollo/client";

export const updateProfileMutation = gql`
  mutation UpdateProfile(
    $displayName: String
    $about: String
    $interests: String
  ) {
    updateProfile(
      data: { displayName: $displayName, about: $about, interests: $interests }
    ) {
      id
      profile {
        displayName
        imageURL
        about
        interests
      }
    }
  }
`;

export const searchUsersQuery = gql`
  query SearchUser($pageNo: Int!, $query: String!) {
    searchUsers(resultsPerPage: 8, pageNo: $pageNo, query: $query) {
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
