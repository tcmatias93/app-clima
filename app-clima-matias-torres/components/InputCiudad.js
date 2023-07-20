"use client";
import React, { useState } from "react";

const InputCiudad = () => {
  const [ciudad, setCiudad] = useState("");

  function guardarCiudad(e) {
    e.preventDefault();
    setCiudad(e.target.value);
  }

  function enviarCiudad() {
    console.log("Ciuda: ", ciudad);
  }

  function envioCiudadEnter(e) {
    if (e.key === "Enter") {
      enviarCiudad();
    }
  }

  return (
    <>
      <label>
        Ingrese una ciudad:{" "}
        <input
          type="text"
          placeholder="Ej: Ciuda de Mexico"
          value={ciudad}
          onChange={guardarCiudad}
          onKeyPress={envioCiudadEnter}
        />
      </label>

      <button onClick={enviarCiudad}>Buscar</button>
    </>
  );
};

export default InputCiudad;
