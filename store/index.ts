import { configureStore } from "@reduxjs/toolkit";

// Slice
import userSlice from "./slices/userSlice";
import postSlice from "./slices/postSlice";
import notificationSlice from "./slices/notificationSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
    notification: notificationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
