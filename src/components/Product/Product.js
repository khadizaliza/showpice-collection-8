
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, image, price, id} =props.product;
   
    return (
        <div className='product'>
          <img src={image} alt="" />
          <div>
          <p className='product-name'>Name: {name}</p>
          <p>Price: ${price}</p>
          <p><small>Id: {id}</small></p>
          
          </div>
          <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
              <p className='btn-cart-text'>Add to Cart</p>
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
    );
};

export default Product;










