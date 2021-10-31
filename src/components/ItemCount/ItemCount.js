import React from "react";

export const ItemCount = ({ cantidad, modify, max }) => {
  const handleRestar = () => {
    if (cantidad >= 1) {
      modify(cantidad - 1);
    }
  };

  const handleSumar = () => {
    if (cantidad < max) {
      modify(cantidad + 1);
    }
  };

  return (
    <div>
      <button
        className={`btn btn-sm ${
          cantidad < 1 ? "btn-danger disabled" : "btn-secondary"
        }`}
        onClick={handleRestar}
      >
        -
      </button>
      <span className="mx-3">{cantidad}</span>
      <button
        className={`btn btn-sm ${
          cantidad === max ? "btn-danger disabled" : "btn-secondary"
        }`}
        onClick={handleSumar}
      >
        +
      </button>
    </div>
  );
};
