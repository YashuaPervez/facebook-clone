import { gql } from "@apollo/client";

export const updateProfileMutation = gql`
  mutation UpdateProfile($displayName: String, $about: String) {
    updateProfile(data: { displayName: $displayName, about: $about }) {
      id
    }
  }
`;
