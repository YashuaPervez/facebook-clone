import React from "react";

// Components
import Paper from "../../UI/Paper";

type UserCardItemProps = {
  user: any;
};

const UserCardItem: React.FC<UserCardItemProps> = ({ user }) => {
  const chip =
    "bg-blue-400 mr-2 mb-2 inline-block px-5 py-1 rounded-full text-white font-semibold cursor-pointer";

  return (
    <Paper className="mb-3">
      <div className="flex items-start">
        <div className="w-40 mr-4">
          <div className="w-40 h-40 bg-gray-100 rounded-full" />
        </div>
        <div className="flex-1 mt-6">
          <h3 className="text-xl font-bold mb-1">{user.profile.displayName}</h3>
          <p className="text-sm max-w-sm mb-2">{user.profile.about}</p>
          <h4 className="text-lg font-semibold mb-1">Intersts: </h4>
          <div>
            <span className={`${chip}`}>Web</span>
            <span className={`${chip}`}>Mobile</span>
            <span className={`${chip}`}>This</span>
            <span className={`${chip}`}>That</span>
            <span className={`${chip}`}>Others</span>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default UserCardItem;
