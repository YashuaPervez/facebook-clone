import React, { useState } from "react";
import Link from "next/link";

// Components
import BackdropBottom from "./BackdropBottom";

type IconButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: "primary" | "white";
  size?: "sm" | "md";
  menu?: {
    text: string;
    link: string;
    onClick?: React.MouseEventHandler<HTMLLIElement>;
  }[];
};

const IconButton: React.FC<IconButtonProps> = ({
  children,
  type = "button",
  className = "",
  onClick,
  color = "primary",
  size = "md",
  menu,
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuExists = menu && menu.length;

  let colorClasses =
    "bg-blue-400 border border-blue-500 hover:bg-blue-500 hover:border-blue-600";
  let sizeClasses = "h-12 w-12";

  switch (color) {
    case "white":
      colorClasses =
        "bg-white border-gray-200 hover:bg-gray-200 hover:border-gray-400";
      break;
  }

  switch (size) {
    case "sm":
      sizeClasses = "h-10 w-10";
      break;
  }

  const buttonClickHandler: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    if (menuExists) {
      setMenuOpen((prev) => !prev);
    }
    if (onClick) {
      onClick(e);
    }
  };

  const closeMenuHandler: React.MouseEventHandler<HTMLDivElement> = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`relative ${menuOpen ? "z-10" : "z-0"}`}>
      <button
        type={type}
        className={`rounded-full flex items-center justify-center ${sizeClasses} ${colorClasses} ${className}`}
        onClick={buttonClickHandler}
      >
        <span className="text-white text-sm font-semibold">{children}</span>
      </button>
      {menuExists && menuOpen ? (
        <ul className="absolute right-0 bg-white flex flex-col w-56 py-2 rounded mt-1 shadow-lg">
          {menu.map((item) => (
            <Link href={item.link}>
              <a>
                <li
                  className="py-2 px-4 hover:bg-gray-100"
                  onClick={item.onClick}
                >
                  {item.text}
                </li>
              </a>
            </Link>
          ))}
        </ul>
      ) : null}
      {menuOpen && <BackdropBottom onClick={closeMenuHandler} />}
    </div>
  );
};

export default IconButton;
