import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../typeDefs";

export type PostState = {
  posts: Post[];
  moreAvailable: boolean;
};

const initialState: PostState = {
  posts: [],
  moreAvailable: false,
};

type LoadPostsType = {
  posts: Post[];
  moreAvailable: boolean;
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    loadPosts: (state, action: PayloadAction<LoadPostsType>) => {
      state.posts = action.payload.posts;
      state.moreAvailable = action.payload.moreAvailable;
    },

    loadMorePosts: (state, action: PayloadAction<LoadPostsType>) => {
      state.posts = [...state.posts, ...action.payload.posts];
      state.moreAvailable = action.payload.moreAvailable;
    },
  },
});

export const { loadPosts, loadMorePosts } = postSlice.actions;
export default postSlice.reducer;
