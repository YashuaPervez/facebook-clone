import React from "react";
import ReactDOM from "react-dom";

import { useAppSelector } from "../../../utils/hooks/redux-store";

// Components
import NotificationItem from "./item";

type NotificationsProps = {};

const Notifications: React.FC<NotificationsProps> = () => {
  const notifications = useAppSelector(
    (state) => state.notification.notifications
  );

  if (typeof document === "undefined") {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="w-72 fixed top-20 right-4 z-70">
      {notifications.slice(0, 3).map((not) => (
        <NotificationItem {...not} />
      ))}
    </div>,
    document.getElementById("notifications-placeholder")!
  );
};

export default Notifications;
