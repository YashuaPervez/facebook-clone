import React, { useState } from "react";

// Components
import Backdrop from "../UI/Backdrop";

//
import { RightArrow } from "../icons";

type BodyLayoutProps = {
  children: React.ReactNode;
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
  removePannelButtons?: boolean;
  removeRightPannelButton?: boolean;
  removeLeftPannelButton?: boolean;
};

const BodyLayout: React.FC<BodyLayoutProps> = ({
  children,
  leftSide,
  rightSide,
  removePannelButtons,
  removeRightPannelButton,
  removeLeftPannelButton,
}) => {
  const [leftPanelOpen, setLeftPanelOpen] = useState<boolean>(false);
  const [rightPanelOpen, setRightPanelOpen] = useState<boolean>(false);

  const anyPanelOpen = leftPanelOpen || rightPanelOpen;

  const closeAllPanels: React.MouseEventHandler<HTMLDivElement> = () => {
    setLeftPanelOpen(false);
    setRightPanelOpen(false);
  };

  const toggleLeftPanel: React.MouseEventHandler<HTMLButtonElement> = () => {
    setLeftPanelOpen((prev) => !prev);
    setRightPanelOpen(false);
  };

  const toggleRightPanel: React.MouseEventHandler<HTMLButtonElement> = () => {
    setRightPanelOpen((prev) => !prev);
    setLeftPanelOpen(false);
  };

  const commonPanelClasses =
    "w-10/12 fixed top-0 h-screen lg:w-72 lg:relative lg:content z-40 lg:z-0 transition-all bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0";
  const commonButtonClasses =
    "bg-primary-main absolute top-1/2 transform -translate-y-1/2 h-20 w-10 p-1 shadow-lg lg:hidden";

  return (
    <>
      <div className="lg:flex gap-4">
        {leftSide && (
          <div
            className={`left-0 ${commonPanelClasses} ${
              leftPanelOpen ? "" : "slide-close"
            }`}
          >
            {leftSide}
            {!removePannelButtons && !removeRightPannelButton && (
              <button
                className={`right-0 translate-x-full rounded-r-lg ${commonButtonClasses}`}
                onClick={toggleLeftPanel}
              >
                <span>
                  <RightArrow color="#fff" size={6.4} />
                </span>
              </button>
            )}
          </div>
        )}
        <div className="flex-1">{children}</div>
        {rightSide && (
          <div
            className={`right-0 ${commonPanelClasses} ${
              rightPanelOpen ? "" : "slide-close-right"
            }`}
          >
            {rightSide}
            {!removePannelButtons && !removeLeftPannelButton && (
              <button
                className={`left-0 -translate-x-full rounded-l-lg ${commonButtonClasses}`}
                onClick={toggleRightPanel}
              >
                <span className="block transform rotate-180">
                  <RightArrow color="#fff" size={6.4} />
                </span>
              </button>
            )}
          </div>
        )}
      </div>
      {anyPanelOpen && <Backdrop onClick={closeAllPanels} />}
    </>
  );
};

export default BodyLayout;
