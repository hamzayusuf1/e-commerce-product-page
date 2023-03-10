import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [orderNum, setOrderNum] = useState(0);
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContext.Provider
      value={{ orderNum, setOrderNum, showCart, setShowCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
