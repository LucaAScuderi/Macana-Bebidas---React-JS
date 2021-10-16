import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./NavBar.css";

export const CartWidget = () => {
  return (
    <div className="shoppingCartIcon">
      <FaShoppingCart />
    </div>
  );
};
