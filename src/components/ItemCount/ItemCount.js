import React from "react";

export const ItemCount = ({ cantidad, modify, max }) => {
  const handleRestar = () => {
    if (cantidad >= 1){
        modify(cantidad - 1);
    }
  };

  const handleSumar = () => {
    if (cantidad < max){
        modify(cantidad + 1);
    }
  };

  return (
    <div>
      <button className="btn btn-secondary btn-sm" onClick={handleRestar}>
        -
      </button>
      <span className="mx-3">{cantidad}</span>
      <button className="btn btn-secondary btn-sm" onClick={handleSumar}>
        +
      </button>
    </div>
  );
};
