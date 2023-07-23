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
              placeholder="Ej: Ciudad de mexico "
              className="form-control"
            />

            <button type="submit" className="btn btn-primary input-group-text">
              Enviar
            </button>
          </div>
        </form>
        {error && <h4 className="text-danger text-center">{error}</h4>}
      </div>
    </>
  );
};

export default InputCiudad;
