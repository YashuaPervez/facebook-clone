import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  isLoggedIn: boolean;
  user: any;
  token: string;
};

// Payloads
export type LoginActionPayload = {
  user: any;
  token: string;
};
export type UpdateProfileActionPayload = {
  profile: any;
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
      state = {
        isLoggedIn: false,
        token: "",
        user: null,
      };
    },

    updateProfile: (
      state,
      action: PayloadAction<UpdateProfileActionPayload>
    ) => {
      state.user.profile = action.payload.profile;
    },
  },
});

export const { login, logout, updateProfile } = userSlice.actions;
export default userSlice.reducer;
