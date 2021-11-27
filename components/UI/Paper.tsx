import React from "react";

type PaperProps = {
  children: React.ReactNode;
  className?: string;
  removeBorderMobile?: boolean;
};

const Paper: React.FC<PaperProps> = ({
  children,
  className,
  removeBorderMobile,
}) => {
  return (
    <div
      className={`bg-white rounded ${
        removeBorderMobile
          ? "lg:border lg:border-gray-200 lg:shadow-sm"
          : "border border-gray-200 shadow-sm"
      } py-3 px-4 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Paper;
