import React from "react";

type ItemProps = {
  image: string;
};

const Item: React.FC<ItemProps> = ({ image }) => {
  return (
    <div className="w-full h-20 bg-gray-200 hover:bg-gray-300 cursor-pointer flex items-center justify-center overflow-hidden">
      {<img src={image} className="min-w-full min-h-full object-cover" />}
    </div>
  );
};

export default Item;
