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
      <form onSubmit={handleSubmit}>
        <label>
          Ingrese una Ciudad o CP
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="ej: Buenos Aires"
          />
        </label>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default InputCiudad;
