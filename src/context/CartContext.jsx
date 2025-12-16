import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = (state) => {
    setIsCartOpen(state !== undefined ? state : !isCartOpen);
  };

  // UPDATED: Added 'quantity' parameter (defaults to 1)
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.uniqueId === product.uniqueId);

      if (existingItem) {
        return prevItems.map((item) =>
          item.uniqueId === product.uniqueId
            // Existing quantity mein nayi quantity add karein
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Naye item ke sath specific quantity set karein
        return [...prevItems, { ...product, quantity: quantity }];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (uniqueId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.uniqueId !== uniqueId));
  };

  const updateQuantity = (uniqueId, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.uniqueId === uniqueId) {
          const newQuantity = type === 'inc' ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: Math.max(1, newQuantity) };
        }
        return item;
      })
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, isCartOpen, toggleCart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};