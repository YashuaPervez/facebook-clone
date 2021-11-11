import React from "react";

type UserItemProps = {
  user: any;
  first: boolean;
};

const UserItem: React.FC<UserItemProps> = ({ user, first }) => {
  return (
    <div
      className={`flex p-2 items-center cursor-pointer hover:bg-gray-200 rounded ${
        !first ? "mt-2 border-t border-gray-200" : ""
      }`}
    >
      <div className="h-10 w-10 rounded-full bg-gray-300 mr-2 relative">
        <span className="h-5 w-5 bg-green-500 block rounded-full absolute bottom-0 right-0 -mb-1 -mr-1 border-2 border-gray-200" />
      </div>
      <div>
        <h3 className="font-semibold text-md">{user.name}</h3>
        {user.last_message && (
          <p className="text-sm ml-1 text-gray-400">{user.last_message}</p>
        )}
      </div>
    </div>
  );
};

export default UserItem;
