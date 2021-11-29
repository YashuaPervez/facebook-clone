import React from "react";

type HeadingProps = {
  children: React.ReactNode;
  element: "h1" | "h2" | "h3" | "h4";
  style: "main" | "paperTitle" | "smallTitle";
  removeBottomSpacing?: boolean;
};

const Heading: React.FC<HeadingProps> = ({
  children,
  element = "h1",
  style,
  removeBottomSpacing,
}) => {
  let headingClasses = `${!removeBottomSpacing ? "mb-4" : ""} `;

  switch (style) {
    case "main":
      headingClasses += "text-4xl font-extrabold";
      break;
    case "paperTitle":
      headingClasses += "text-2xl font-bold";
      break;
    case "smallTitle":
      headingClasses += "text-lg font-semibold";
      break;
  }

  if (element === "h1") {
    return <h1 className={headingClasses}>{children}</h1>;
  } else if (element === "h2") {
    return <h2 className={headingClasses}>{children}</h2>;
  } else if (element === "h3") {
    return <h3 className={headingClasses}>{children}</h3>;
  } else if (element === "h4") {
    return <h4 className={headingClasses}>{children}</h4>;
  }

  return null;
};

export default Heading;
