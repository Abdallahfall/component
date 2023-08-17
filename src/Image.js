import React from 'react';
import productData from './product';

const Images = () => {
  console.log(productData)
  return <img src={productData.imageUrl} alt={productData.name} style={{width:'300px', height:'auto'}}/>;
};

export default Images;
