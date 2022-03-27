
import React from 'react';
import Product from '../Product/Product';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h1>Special Selection</h1>
             {
                 cart.map(product =><p>{product.name}</p>)
             }
             <div className='choose-btn'>
             <button>Choose best one</button>
            <br></br>
            <button>Select again</button>
             </div>
        

        </div>
    );
};

export default Cart;










