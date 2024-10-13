import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  
  const [cartItems, setCartItems] = useState([]);
  
    const addtocart=(product)=>{
       const Existproduct=cartItems.find((item)=>item.id===product.id)
       if(Existproduct){
        setCartItems((item)=>item.id===product.id? {...item,quantity:item.quantity+1 }:item)
       }
       else{
        setCartItems([...cartItems,{...product,quantity:1}])
    }
    }
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
      };


  return (
    <CartContext.Provider value={{addtocart, cartItems, setCartItems,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
