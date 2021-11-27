import React from "react";
import ReactDOM from "react-dom";

type BackdropBottom = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const BackdropBottom: React.FC<BackdropBottom> = ({ onClick }) => {
  const portalContent = (
    <div
      className="bg-gray-500 opacity-0 fixed w-screen h-screen top-0 left-0 z-10"
      onClick={onClick}
    ></div>
  );

  return ReactDOM.createPortal(
    portalContent,
    document.getElementById("backdrop-bottom-placeholder")!
  );
};

export default BackdropBottom;
