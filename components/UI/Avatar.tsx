type AvatarProps = {
  src: string;
  size?: "sm" | "md" | "lg";
  moreJSX?: React.ReactNode;
};

const Avatar: React.FC<AvatarProps> = ({ src, size = "sm", moreJSX }) => {
  let sizeClasses = "";
  switch (size) {
    case "sm":
      sizeClasses = "h-10 w-10";
      break;
    case "md":
      sizeClasses = "h-20 w-20";
      break;
    case "lg":
      sizeClasses = "h-36 w-36";
      break;
    default:
      sizeClasses = "h-10 w-10";
      break;
  }

  return (
    <div
      className={`${sizeClasses} bg-gray-300 rounded-full overflow-hidden relative`}
    >
      <img src={src} className="min-w-full min-h-full object-cover" />
      {moreJSX}
    </div>
  );
};

export default Avatar;
