import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import './Detail.css'; 
import { useCart } from '../../Context/Content';

function ProductDetail() {
  const { addToCart, cartItems, setCartItems } = useCart();
  
  const location = useLocation();
  const { product } = location.state;
  const initialQuantity = cartItems.find(item => item.id === product.id)?.quantity || 1;
 const [change, setChange] = useState(initialQuantity);

  const setItem = (product, quantity) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: Math.max(1, quantity) } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

 

  return (
    <div className="container">
      <main className="main-content">
        <div className="product-detail">
          <img
            src={product.image}
            alt={product.name}
            className="product-image2"
          />

          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>
            <div className="rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star" />
                ))}
              </div>
            </div>
            <p className="price">$ {product.price}</p>
            <p className="description">{product.description}</p>
            <div className="quantity-container">
              <label htmlFor="quantity">Quantity</label>
              <div className="quantity-controls">
                <button
                  className="quantity-button"
                  onClick={() => {
                    if (change > 1) setChange(change - 1);
                  }}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={change}
                  onChange={(e) => setChange(Math.max(1, parseInt(e.target.value) || 1))}
                  className="quantity-input"
                  min={1}
                />
                <button
                  className="quantity-button"
                  onClick={() => setChange(change + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="add-to-cart-button2"
              onClick={() => setItem(product, change)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetail;
