import React from "react";

// Components
import Paper from "../../UI/Paper";

//
import { GraduationCap, Suitcase, LocationMarker } from "../../icons";

type UserIntroProps = {
  user: {
    workPlace?: string;
    location?: string;
  };
  paperClassName?: string;
};

const UserIntro: React.FC<UserIntroProps> = ({ paperClassName, user }) => {
  const listItem = "flex items-center mb-4";
  const iconWrapper = "mr-3";

  return (
    <Paper className={paperClassName} removeBorderMobile>
      <h2 className="text-xl font-bold mb-4">Intro</h2>
      <ul>
        <li className={`${listItem}`}>
          <div className={`${iconWrapper}`}>
            <Suitcase size={5.5} />
          </div>
          Works at&nbsp;<span className="font-bold">{user.workPlace}</span>
        </li>
        <li className={`${listItem}`}>
          <div className={`${iconWrapper}`}>
            <LocationMarker size={5.5} />
          </div>
          Lives in&nbsp;<span className="font-bold">{user.location}</span>
        </li>
      </ul>
    </Paper>
  );
};

export default UserIntro;
