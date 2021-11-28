import React from "react";
import Link from "next/link";

// Components
import Paper from "../../UI/Paper";
import Gallery from "../../UI/Gallery";

type UserGalleryProps = {
  paperClassName?: string;
  images: string[];
};

const UserGallery: React.FC<UserGalleryProps> = ({
  paperClassName,
  images,
}) => {
  return (
    <Paper className={paperClassName} removeBorderMobile>
      <div className="flex items-center">
        <h2 className="text-xl font-bold mb-3 flex-1">Image</h2>
        <Link href="/">
          <a className="text-sm text-blue-400">View All</a>
        </Link>
      </div>
      <Gallery images={images} />
    </Paper>
  );
};

export default UserGallery;
