import React from "react";

type PaperProps = {
  children: React.ReactNode;
  className?: string;
};

const Paper: React.FC<PaperProps> = ({ children, className }) => {
  return (
    <div
      className={`bg-white rounded border border-gray-200 py-3 px-4 shadow-sm overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Paper;
