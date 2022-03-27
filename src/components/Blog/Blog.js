
import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-section'>
            <div>
            <h2 className='blog-head'>How React Works</h2>
            <p>React is javascript library for building user interfaces. React is a piece of the UI. Its not a framework.Its works by create an app . Which app create by npx. React app start by npm. By using react app build afaster and active website. So React is the best way to build a website. React is complet library and appliction.</p>
            </div>
            <div>
              <h2 className='blog-head'>What is the difference of State and Props</h2>  
            <p>1. Props is short for properties. State is a data structure with a defult value.
                
            <br></br>2. State can change and props can't change.<br></br>
            3. State change inside component and props can't change inside component.<br></br>
            4. Where state decalar data stay there. And props send data anywere.<br></br>
            5. Props are read only. state changes can be asynchronous.</p>
            </div>
        </div>
    );
};

export default Blog;










