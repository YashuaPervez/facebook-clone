import React from "react";

// Components
import Heading from "./Heading";

type PaperProps = {
  children: React.ReactNode;
  className?: string;
  removeBorderMobile?: boolean;
  title?: string;
};

const Paper: React.FC<PaperProps> = ({
  children,
  className,
  removeBorderMobile,
  title,
}) => {
  return (
    <div
      className={`bg-white rounded ${
        removeBorderMobile
          ? "lg:border lg:border-gray-200 lg:shadow-sm"
          : "border border-gray-200 shadow-sm"
      } py-3 px-4 overflow-hidden ${className}`}
    >
      {title && (
        <Heading element="h2" style="paperTitle">
          {title}
        </Heading>
      )}
      {children}
    </div>
  );
};

export default Paper;
