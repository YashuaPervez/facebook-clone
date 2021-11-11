import React from "react";
import Link from "next/link";

// Components
import Paper from "../../UI/Paper";
import Gallery from "../../UI/Gallery";

type UserGalleryProps = {
  paperClassName?: string;
};

const UserGallery: React.FC<UserGalleryProps> = ({ paperClassName }) => {
  return (
    <Paper className={paperClassName}>
      <div className="flex items-center">
        <h2 className="text-xl font-bold mb-3 flex-1">Image</h2>
        <Link href="/">
          <a className="text-sm text-blue-400">View All</a>
        </Link>
      </div>
      <Gallery />
    </Paper>
  );
};

export default UserGallery;
