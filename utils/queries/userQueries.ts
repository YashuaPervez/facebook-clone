import { gql } from "@apollo/client";

export const updateProfileMutation = gql`
  mutation UpdateProfile($displayName: String, $about: String) {
    updateProfile(data: { displayName: $displayName, about: $about }) {
      id
      profile {
        displayName
        imageURL
        about
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
