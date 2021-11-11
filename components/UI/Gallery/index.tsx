import React from 'react';

// Components
import Item from './Item';

const Gallery = () => {
  return (
    <div className='grid grid-cols-3 gap-1 rounded-lg overflow-hidden'>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Gallery;
