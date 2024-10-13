import React from 'react';
import './Navbar.css'; 
import { FaShoppingCart } from "react-icons/fa"; 
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/Content'; 

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart(); 
  const uniqueItemCount = cartItems.length;

  return (
    <div className="navbar">
      <div className="navbar-left">ShopNow</div>
      <div className="navbar-right">
        <FaShoppingCart className="cart-icon" onClick={() => navigate("/cart")} />
        {uniqueItemCount > 0 && (
          <span className="cart-quantity">{uniqueItemCount}</span> 
        )}
      </div>
    </div>
  );
};

export default Navbar;
