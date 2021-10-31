import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import "./NavBar.css";

export const CartWidget = () => {
  const { calcularCantidad } = useContext(CartContext);

  return (
    <div
      className={`${
        calcularCantidad() === 0
          ? "shoppingCartIconEmpty mb-2"
          : "shoppingCartIcon mb-0"
      }`}
    >
      <FaShoppingCart />
      <p
        className={`${
          calcularCantidad() === 0
            ? "d-none"
            : "badge text-success fs-5 ms-1 p-0"
        }`}
      >
        {calcularCantidad()}
      </p>
    </div>
  );
};
