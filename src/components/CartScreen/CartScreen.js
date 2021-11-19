import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { CartItem } from "./CartItem";

export const CartScreen = () => {
  const { carrito, calcularTotal } = useContext(CartContext);

  return (
    <main className="container my-5">
      <div className="row">
        <div className="col-6">
          <h2>Resumen de compra</h2>
          <h6 className="text-muted">{carrito.length} producto/s agregado/s.</h6>
        </div>
        <div className="col-6">
          <h3 className="display-6 text-secondary  d-flex justify-content-end">
            PRECIO TOTAL: $ {calcularTotal()},00
          </h3>
        </div>
        <hr />
        <>
          {carrito.length === 0 ? (
            <h2 className="text-center display-3 mt-5">
              No hay items en el carrito
            </h2>
          ) : (
            <CartItem />
          )}
        </>
      </div>
    </main>
  );
};
