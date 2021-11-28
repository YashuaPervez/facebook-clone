import React from "react";

//
import { Loading } from "../../icons";
import { colors } from "../../../styles/colors";

type LoaderBlockProps = {
  blockHeight?: "sm" | "md" | "lg";
};

const LoaderBlock: React.FC<LoaderBlockProps> = ({ blockHeight = "sm" }) => {
  let sizeClass = "h-24";
  switch (blockHeight) {
    case "md":
      sizeClass = "h-36";
    case "lg":
      sizeClass = "h-48";
  }

  return (
    <div className={`${sizeClass} w-full flex items-center justify-center`}>
      <span className="block animate-spin">
        <Loading size={5.4} color={colors.primary.main} />
      </span>
    </div>
  );
};

export default LoaderBlock;
