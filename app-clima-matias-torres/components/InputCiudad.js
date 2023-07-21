"use client";

import React, { useState } from "react";

const InputCiudad = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim() === "") {
      setError("Por favor, ingresa una ciudad");
    } else {
      setError("");
      console.log("Ciudad ingresada:", city);
    }
  };

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
    <div className="App">
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
    </div>
  );
};

export default InputCiudad;
