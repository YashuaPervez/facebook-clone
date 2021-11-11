import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Post = { id: number; title: string; imageURL: string };

export type PostState = {
  posts: Post[];
};

const initialState: PostState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    loadPosts: (state, action: PayloadAction<{ posts: Post[] }>) => {
      state.posts = action.payload.posts;
    },
  },
});

export const { loadPosts } = postSlice.actions;
export default postSlice.reducer;
