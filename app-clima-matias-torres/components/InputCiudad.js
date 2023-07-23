"use client";

import React, { useState } from "react";

const InputCiudad = ({ handleSubmit, city, setCity, error, setError }) => {
  const handleInputChange = (event) => {
    setCity(event.target.value);
    setError("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3 mx-auto">
            <input
              type="text"
              value={city}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Ingrese una Ciudad o CP"
              className="form-control"
            />

            <button type="submit" className="btn btn-primary input-group-text">
              Enviar
            </button>
          </div>
        </form>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </>
  );
};

export default InputCiudad;
