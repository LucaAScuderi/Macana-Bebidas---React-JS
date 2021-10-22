import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartScreen.css";


export const CartItem = () => {
  const { carrito, vaciarCarrito, removeItem} = useContext(CartContext);

  

  
  

  return (
    <>
      {carrito.map((item) => {
        
        return (
          <div className="col-md-6 col-12 mt-3 gx-5">
            
              <div className="row border border-2 rounded p-2" key={item.id}>
                <div className="col-5">
                  <img
                        src={item.img}
                        alt={item.name + item.description}
                      className="img-fluid">

                  </img>

                </div>

                <div className="col-7 d-grid justify-content-start align-items-center border-2 border-">
                  <div className="container-fluid">
                  <h4 className="text-primary">
                        {item.name} {item.description}
                      </h4>
                  </div>
                  <div className="container-fluid">
                    <h5>{item.cantidad}u. <span className="text-muted small">x</span> $ {item.price},00</h5>
                  </div>

                  <div className="container-fluid mt-4">
                    <h3 className="text-success">$ {item.price * item.cantidad},00</h3>
                    
                  </div>

                </div>

              </div>

              <div className="row">
              
                <div className="col-2 mb-5">
                
                <button className="text-primary border-0" onClick={() => removeItem(item.id)}>Eliminar</button>
                
                </div>
              
              </div>
              
          </div>
         
        );
      })}

      <button className="btn btn-danger" onClick={vaciarCarrito}>
        Vaciar Carrito
      </button>
    </>
  );
};


 