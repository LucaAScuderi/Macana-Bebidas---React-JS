import React from "react";
import { useHistory } from "react-router";
import './itemDetailContainer.css'

export const ItemDetail = ({
  id,
  name,
  price,
  img,
  description,
  category,
  quantity,
}) => {
  const { goBack, push } = useHistory();

  return (
    <div className="container">
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mt-3">
            <button className="btn breadcrumb-item text-white" onClick={() => push("/")}>
              Volver al inicio
            </button>

            <button className="btn breadcrumb-item text-white" onClick={() => goBack()}>
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
                  <small class="text-muted">$ {price},00</small>
                </h5>
                <btn className="btn mt-4 btn-outline-dark">
                  Agregar al carrito
                </btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
