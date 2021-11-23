import React from "react";

type IconButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const IconButton: React.FC<IconButtonProps> = ({
  children,
  type = "button",
  className = "",
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`h-12 w-12 bg-blue-400 border border-blue-500 hover:bg-blue-500 hover:border-blue-600 rounded-full flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      <span className="text-white text-sm font-semibold">{children}</span>
    </button>
  );
};

export default IconButton;
