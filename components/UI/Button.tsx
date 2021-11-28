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
      className={`px-5 py-1 bg-primary-main border border-primary-dark hover:bg-primary-semidark rounded ${className}`}
      disabled={loading}
      onClick={onClick}
    >
      <span className="text-white text-sm font-semibold">{children}</span>
    </button>
  );
};

export default Button;
