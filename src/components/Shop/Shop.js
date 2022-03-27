
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, [])
    const handleAddToCart =(product) =>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='item-container'>
         <div className="product-container">

        {
            products.map(product=><Product 
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            ></Product>)
        }
        
             </div> 


         <div className="product-container-cart">
             
             <Cart cart={cart}></Cart>

             </div>
            <Blog></Blog>
             <div>
                 
                 
                 </div>   
        </div>
        
    );
};

export default Shop;











