import React, { useEffect } from "react";
import { useAppDispatch } from "../../../utils/hooks/redux-store";

// Components
import Heading from "../Heading";

//
import { Notification } from "../../../typeDefs";
import { removeNotification } from "../../../store/slices/notificationSlice";

type NotificationItemProps = Notification;

const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  text,
  type,
  id,
}) => {
  const dispatch = useAppDispatch();

  let colorClasses = "";
  switch (type) {
    case "error":
      colorClasses = "border-red-500 bg-red-400";
      break;
    case "success":
      colorClasses = "border-green-600 bg-green-500";
      break;
    case "warning":
      colorClasses = "border-yellow-400 bg-yellow-300 text-gray-900";
      break;
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        removeNotification({
          id,
        })
      );
    }, 5000);
  }, []);

  return (
    <div
      className={`py-2 px-3 border-2 ${colorClasses} rounded-lg text-white mb-2`}
    >
      {title && (
        <Heading element="h3" style="smallTitle" removeBottomSpacing>
          {title}
        </Heading>
      )}
      {text && <p className="text-sm">{text}</p>}
    </div>
  );
};

export default NotificationItem;
