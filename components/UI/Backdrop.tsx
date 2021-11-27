import React from "react";
import ReactDOM from "react-dom";

type Backdrop = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const Backdrop: React.FC<Backdrop> = ({ onClick }) => {
  const portalContent = (
    <div
      className="fixed w-screen h-screen top-0 left-0 z-30"
      onClick={onClick}
    ></div>
  );

  if (typeof document === "undefined") {
    return null;
  }

  return ReactDOM.createPortal(
    portalContent,
    document.getElementById("backdrop-placeholder")!
  );
};

export default Backdrop;
