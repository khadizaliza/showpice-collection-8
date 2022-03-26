
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, image, price, id } =props.product;
    return (
        <div className='product'>
          <img src={image} alt="" />
          <p className='product-name'>Name: {name}</p>
        </div>
    );
};

export default Product;










