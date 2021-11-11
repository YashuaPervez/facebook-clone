import React from "react";

type HeadingProps = {
  children: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return <h2 className="mb-4 text-2xl font-bold">{children}</h2>;
};

export default Heading;
