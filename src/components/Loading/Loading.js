import React from "react";
import "./Loading.css";


export const Loading = ({ name }) => {
  const loadingLogo = "../MacanasBro-01.png";
  return (
    <>
      <div className="containerLoading">
        <img
          src={loadingLogo}
          alt="Macana Bro's Logo"
          className="imgLoading"
        ></img>
        <span>Cargando...</span>
      </div>
    </>
  );
};
