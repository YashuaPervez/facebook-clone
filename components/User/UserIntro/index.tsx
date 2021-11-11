import React from "react";

// Components
import Paper from "../../UI/Paper";

//
import { GraduationCap, Suitcase, LocationMarker } from "../../icons";

type UserIntroProps = {
  paperClassName?: string;
};

const UserIntro: React.FC<UserIntroProps> = ({ paperClassName }) => {
  const listItem = "flex items-center mb-4";
  const iconWrapper = "mr-3";

  return (
    <Paper className={paperClassName}>
      <h2 className="text-xl font-bold mb-4">Intro</h2>
      <ul>
        <li className={`${listItem}`}>
          <div className={`${iconWrapper}`}>
            <Suitcase size={5.5} />
          </div>
          Works at&nbsp;<span className="font-bold">Tech Stacker</span>
        </li>
        <li className={`${listItem}`}>
          <div className={`${iconWrapper}`}>
            <GraduationCap size={5.5} />
          </div>
          Studied at&nbsp;<span className="font-bold">FIC Malir</span>
        </li>
        <li className={`${listItem}`}>
          <div className={`${iconWrapper}`}>
            <LocationMarker size={5.5} />
          </div>
          Lives in&nbsp;<span className="font-bold">Karachi</span>
        </li>
      </ul>
    </Paper>
  );
};

export default UserIntro;
