import React from "react";

// Components
import Item from "./Item";

type GalleryProps = {
  images: string[];
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden">
      {images.slice(0, 9).map((img) => (
        <Item key={img} image={img} />
      ))}
    </div>
  );
};

export default Gallery;
