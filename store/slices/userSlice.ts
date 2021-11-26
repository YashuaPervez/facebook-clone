import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, Profile } from "../../typeDefs";

interface SliceUser extends Omit<User, "wallPosts"> {}

export type UserState = {
  isLoggedIn: boolean;
  user: SliceUser | null;
  token: string;
};

// Payloads
export type LoginActionPayload = {
  user: SliceUser;
  token: string;
};
export type UpdateProfileActionPayload = {
  profile: Profile;
};

const initialState: UserState = {
  isLoggedIn: false,
  user: null,
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginActionPayload>) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    logout: (state, action) => {
      state.isLoggedIn = false;
      state.token = "";
      state.user = null;

      if (typeof document !== "undefined") {
        document.cookie =
          "fb-clone-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      }
    },

    updateProfile: (
      state,
      action: PayloadAction<UpdateProfileActionPayload>
    ) => {
      if (state.user) {
        state.user.profile = action.payload.profile;
      }
    },
  },
});

export const { login, logout, updateProfile } = userSlice.actions;
export default userSlice.reducer;
