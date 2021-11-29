import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//
import { Notification } from "../../typeDefs";

export type NotificationsState = {
  notifications: Notification[];
};
const initialState: NotificationsState = {
  notifications: [],
};

// Payloads
type AddNotificationPayload = {
  notification: Notification;
};
type RemoveNotificationPayload = {
  id: number;
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification(state, action: PayloadAction<AddNotificationPayload>) {
      state.notifications.push(action.payload.notification);
    },
    removeNotification(
      state,
      action: PayloadAction<RemoveNotificationPayload>
    ) {
      state.notifications = state.notifications.filter(
        (not) => not.id !== action.payload.id
      );
    },
  },
});

export const { addNotification, removeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
