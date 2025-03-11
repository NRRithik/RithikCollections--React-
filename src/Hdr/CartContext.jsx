import React, { createContext, useState } from 'react';

// Create a Cart Context
export const CartContext = createContext();

// Create a Cart Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({}); // State to manage the cart

  // Function to add a product to the cart
  const addToCart = (product) => {
    const { id } = product;
    setCart((prevCart) => ({
      ...prevCart,
      [id]: prevCart[id]
        ? { ...prevCart[id], quantity: prevCart[id].quantity + 1 }
        : { ...product, quantity: 1 },
    }));
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId, removeCompletely = false) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (removeCompletely || updatedCart[productId].quantity === 1) {
        delete updatedCart[productId]; // Remove the product completely
      } else {
        updatedCart[productId].quantity--; // Decrement the quantity
      }
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};