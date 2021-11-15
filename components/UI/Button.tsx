import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  className,
  loading = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`px-5 py-1 bg-blue-400 border border-blue-500 hover:bg-blue-500 hover:border-blue-600 rounded ${className}`}
      disabled={loading}
      onClick={onClick}
    >
      <span className="text-white text-sm font-semibold">{children}</span>
    </button>
  );
};

export default Button;
