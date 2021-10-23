import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import "./NavBar.css";

export const CartWidget = () => {
  const { calcularCantidad } = useContext(CartContext);

  return (
    <div className="shoppingCartIcon">
      <FaShoppingCart />
      <p className="badge text-secondary fs-5 ms-1 p-0">{calcularCantidad()}</p>
    </div>
  );
};
