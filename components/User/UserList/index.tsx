import React from "react";

// Components
import UserItem from "./item";

type UserListProps = {
  users: any[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="w-full">
      {users.map((user, i) => (
        <UserItem key={user.id} user={user} first={i === 0} />
      ))}
    </div>
  );
};

export default UserList;
