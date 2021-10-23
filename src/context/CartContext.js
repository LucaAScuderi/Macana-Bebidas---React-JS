import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addToCart = (item) => {
    setCarrito([...carrito, item]);
  };

  const removeItem = (itemID) => {
    const newCart = carrito.filter((prod) => prod.id !== itemID);
    setCarrito(newCart);
  };

  const calcularCantidad = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const calcularTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0);
  };

  const productAdded = (itemId) => {
    return carrito.some((prod) => prod.id === itemId);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CartContext.Provider
      value={{
        carrito,
        addToCart,
        removeItem,
        calcularCantidad,
        vaciarCarrito,
        productAdded,
        calcularTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
