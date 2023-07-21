"use client";

import React, { useState } from "react";
let clave = process.env.CLAVE_API;

const InputCiudad = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (city.trim() === "") {
      setError("Por favor, ingresa una ciudad");
    } else {
      setError("");
      console.log("Ciudad ingresada:", city);
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f3da5be43514d2f2fa95b7d0e3e01d6`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      console.log(data);
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
