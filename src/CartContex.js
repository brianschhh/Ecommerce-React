import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children, defaultCart = [] }) => {
  const [cart, setCart] = useState(defaultCart);
  const [cantItems, setcantItems] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  function addItem(item, qnt) {
    if (cart.length !== 0) {
      let aux = cart.findIndex((obj) => {
        return obj.item.id === item.item.id;
      });
      if (aux !== -1) {
        const newCart = cart;
        newCart[aux].cantidad = newCart[aux].cantidad + item.cantidad;
      } else setCart([...cart, item]);
    } else setCart([...cart, item]);
    setcantItems(item.cantidad + cantItems);
  }

  function removeItem(itemID, qnt) {
    setCart(cart.filter((obj) => obj.item.id !== itemID));
    setcantItems(cantItems - qnt);
  }

  function clearCart() {
    setCart(defaultCart);
    setcantItems(0);
  }

  function changeState(isDarkMode) {
    setIsDarkMode(isDarkMode);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cantItems,
        isDarkMode,
        changeState,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
