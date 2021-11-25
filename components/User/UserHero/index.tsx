import React from "react";

// Components
import Avatar from "../../UI/Avatar";

type UserHeroProps = {
  user: {
    displayName: string;
    friendCount: number;
    imageURL?: string;
    coverImageURL?: string;
  };
  className?: string;
};

const UserHero: React.FC<UserHeroProps> = ({ user, className }) => {
  return (
    <div className={`h-72 mb-28 ${className}`}>
      <div className="w-full h-full bg-gray-400 rounded-b-xl shadow overflow-hidden flex items-center justify-center">
        {user.coverImageURL && (
          <img
            src={user.coverImageURL}
            className="min-h-full min-w-full object-cover"
          />
        )}
      </div>
      <div className="max-w-4xl mx-auto flex items-center -mt-20">
        <Avatar size="xl" src={user.imageURL} />
        <div className="ml-5 mt-9">
          <h1 className="text-3xl font-bold">{user.displayName}</h1>
          <p className="text-sm">{user.friendCount} Friends</p>
        </div>
      </div>
    </div>
  );
};

export default UserHero;
