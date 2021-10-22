import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { ItemCount } from "../ItemCount/ItemCount";
import "./itemDetailContainer.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


export const ItemDetail = ({
  id,
  name,
  price,
  img,
  description,
  category,
  quantity,
  stock
}) => {
  const { goBack, push } = useHistory();

  const {addToCart, productAdded} = useContext(CartContext)

  const [cantidad, setCantidad] = useState(0);

  const handleAgregar = () => {
    const newItem = {
      id,
      name,
      description,
      price,
      category,
      cantidad,
      img,
    };
    
    if(cantidad > 0) {
      addToCart(newItem)
    }
    
  };

  return (
    <div className="container">
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mt-3">
            <button
              className="btn breadcrumb-item text-white"
              onClick={() => push("/")}
            >
              Volver al inicio
            </button>

            <button
              className="btn breadcrumb-item text-white"
              onClick={() => goBack()}
            >
              {" "}
              Volver atrás
            </button>
          </ol>
        </nav>

        <div className="card border border-1 rounded-3 shadow-lg">
          <div className="row container-fluid">
            <div className="col-12 col-sm-8 col-md-6 d-flex justify-content-end mt-3">
              <img src={img} className="img-fluid" alt={name} />
            </div>
            <div className="col-12 col-sm-4 d-flex">
              <div className="card-body">
                <h1 className="card-title">
                  {name} {description}
                </h1>
                <h5 className="card-text text-secondary lead">{quantity}</h5>
                <h5 className="card-text mt-3">
                  <small className="text-muted">$ {price},00</small>
                </h5>

                {productAdded(id) ? <div className="row p-5 "><Link to="/cart" className="btn btn-success bg-gradient mb-2">Ir al carrito</Link>
                <p className="btn btn-primary bg-gradient" onClick={() => goBack()}>Seguir comprando</p></div>  :
                <>
                  <h5>
                    
                    <ItemCount cantidad={cantidad} modify={setCantidad} max={stock} />
                  </h5>
                  
                  <button className="btn mt-4 btn-outline-dark" onClick={handleAgregar}>
                    Agregar al carrito
                  </button>
                </>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
