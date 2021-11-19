import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { CartContext } from "../../context/CartContext";

import Swal from "sweetalert2";
import { Loading } from "../Loading/Loading";
import { generarOrden } from "../../firebase/generarOrden";

export const Checkout = () => {
  const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);

  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    tel: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      values.nombre.length === 0 ||
      values.apellido.length === 0 ||
      values.email.length === 0 ||
      values.tel.length === 0
    ) {
      
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: '¡Todavía hay campos vacíos!',
        
      })
      return;
    }

    setLoading(true)
    generarOrden(values, carrito, calcularTotal())
        .then((res) =>{
            Swal.fire({
                icon: 'success',
                title: `Orden registrada N°: ${res}`,
                text: 'No pierdas tu número de orden. A la brevedad nos comunicaremos para finalizar la compra.',
                
              })
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: `Producto sin stock.`,
                text: `No hay stock de: ${err.map(el => el.name).join(', ')}`
              })
        })
        .finally(() => {
            vaciarCarrito()
            setLoading(false)
        })

    

   
  };

  return (
    <>
      {carrito.length === 0 && <Redirect to="/" />}
      {loading && <Loading />}

      <div>
        <h1 className="text-center mt-4 display-3">Finalizar compra</h1>
        <hr />
        {/* listado de la compra */}
        <h2 className="ms-5">{carrito.length} producto/s en el carrito.</h2>

        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-5">
              Complete sus datos para la finalización de la compra.
            </h2>
            <input
              className="form-control my-2"
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={values.nombre}
              onChange={handleInputChange}
            />
            {values.nombre.length === 0 && (
              <small className="text-muted">Este campo es obligatorio</small>
            )}

            <input
              className="form-control my-2"
              type="text"
              placeholder="Apellido"
              name="apellido"
              value={values.apellido}
              onChange={handleInputChange}
            />
            {values.apellido.length === 0 && (
              <small className="text-muted">Este campo es obligatorio</small>
            )}

            <input
              className="form-control my-2"
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
            {values.email.length === 0 && (
              <small className="text-muted">Este campo es obligatorio</small>
            )}

            <input
              className="form-control my-2"
              type="tel"
              placeholder="Teléfono"
              name="tel"
              value={values.tel}
              onChange={handleInputChange}
            />
            {values.tel.length === 0 && (
              <small className="text-muted">Este campo es obligatorio</small>
            )}

            <button
              className="btn btn-success col-12 mt-5"
              onClick={handleSubmit}
              disabled={loading}
            >
              Finalizar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
