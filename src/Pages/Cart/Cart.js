import React, { useState } from 'react';
import { ShoppingBag, Trash2, ArrowLeft } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import './Cart.css'; 
import img8 from "../../Assets/pr6.png"
import img9 from "../../Assets/w1.png"
import { useCart } from '../../Context/Content';


export default function CartScreen() {

    const { addToCart, removeFromCart , cartItems,setCartItems} = useCart();

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ).filter(item => item.quantity > 0));
  };

  

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
    
      <main className="cart-main">
        <div className="cart-content">
          <h2 className="cart-heading">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="cart-empty-message">Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="cart-item-quantity">
                    <button
                      className="quantity-button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                      className="quantity-input"
                      min="0"
                    />
                    <button
                      className="quantity-button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="remove-button" 
                    onClick={() => removeFromCart(item.id)} 
                    aria-label="Remove item"
                  >
                    <Trash2 className="remove-icon" />
                  </button>
                </div>
              ))}
              <div className="cart-total">
                <span className="cart-total-label">Total:</span>
                <span className="cart-total-price">${total.toFixed(2)}</span>
              </div>
              <button className="checkout-button">
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
