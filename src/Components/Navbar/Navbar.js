import React from 'react';
import './Navbar.css'; 
import { FaShoppingCart } from "react-icons/fa"; 
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/Content'; 

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart(); 
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="navbar-left">ShopNow</div>
      <div className="navbar-right">
        <FaShoppingCart className="cart-icon" onClick={() => navigate("/cart")} />
        {totalQuantity > 0 && (
          <span className="cart-quantity">{totalQuantity}</span> 
        )}
      </div>
    </div>
  );
};

export default Navbar;
