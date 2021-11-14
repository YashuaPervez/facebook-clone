type AvatarProps = {
  src: string;
};

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <div className="h-10 w-10 bg-gray-300 rounded-full overflow-hidden">
      <img src={src} className="min-w-full min-h-full object-cover" />
    </div>
  );
};

export default Avatar;
