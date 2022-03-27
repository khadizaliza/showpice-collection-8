
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, image, price, id, icon } =props.product;
   
    return (
        <div className='product'>
          <img src={image} alt="" />
          <div>
          <p className='product-name'>Name: {name}</p>
          <p>Price: ${price}</p>
          <p><small>Id: {id}</small></p>
          
          </div>
          <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
              <p>Add to Cart {icon}</p>
          </button>
        </div>
    );
};

export default Product;










