import React from "react";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <p className="greeting">{greeting}</p>
    </div>
  );
};
