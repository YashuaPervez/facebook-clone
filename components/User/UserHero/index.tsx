import React from "react";

type UserHeroProps = {
  user: {
    displayName: string;
    friendCount: number;
  };
  className?: string;
};

const UserHero: React.FC<UserHeroProps> = ({ user, className }) => {
  return (
    <div className={`h-72 mb-28 ${className}`}>
      <div className="w-full h-full bg-gray-400 rounded-b-xl shadow"> </div>
      <div className="max-w-4xl mx-auto flex items-center -mt-20">
        <div className="w-48 h-48 bg-gray-300 rounded-full"></div>
        <div className="ml-5 mt-9">
          <h1 className="text-3xl font-bold">{user.displayName}</h1>
          <p className="text-sm">{user.friendCount} Friends</p>
        </div>
      </div>
    </div>
  );
};

export default UserHero;
