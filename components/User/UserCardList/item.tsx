import React from "react";

// Components
import Paper from "../../UI/Paper";
import Chip from "../../UI/Chip";
import Avatar from "../../UI/Avatar";

//
import { User } from "../../../typeDefs";

type UserCardItemProps = {
  user: User;
};

const UserCardItem: React.FC<UserCardItemProps> = ({ user }) => {
  return (
    <Paper className="mb-3">
      <div className="flex items-start">
        <div className="w-40 mr-4">
          <Avatar src={user.profile.imageURL} size="lg" />
        </div>
        <div className="flex-1 mt-6">
          <h3 className="text-xl font-bold mb-1">{user.profile.displayName}</h3>
          <p className="text-sm max-w-sm mb-2">{user.profile.about}</p>

          {user.profile.interests && (
            <h4 className="text-lg font-semibold mb-1">Intersts: </h4>
          )}
          {user.profile.interests && (
            <div>
              {user.profile.interests.split(",").map((t, i) => (
                <Chip key={i}>{t}</Chip>
              ))}
            </div>
          )}
        </div>
      </div>
    </Paper>
  );
};

export default UserCardItem;
