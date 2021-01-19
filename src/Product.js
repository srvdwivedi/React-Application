import React from 'react'
import './Product.css';

function Product() {
    return (
        <div className="product">
            <div className = "product__info">
                <p> The Lean startup</p>
                <p className="product__price">
                    <small>$</small> 
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>🌟</p>
                </div>
            </div>
            <img src = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt= "The Lean startup" />
            <button type="button"> Add to basket </button> 
            
        </div>
    )
}

export default Product
