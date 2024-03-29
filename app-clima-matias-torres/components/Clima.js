"use client";

import React, { useState } from "react";
import InputCiudad from "./InputCiudad";
import DetalleClima from "./DetalleClima";

const Clima = () => {
  const [city, setCity] = useState("");
  const [clima, setClima] = useState(null);
  const [error, setError] = useState("");
  const [errorApi, setErrorApi] = useState(null);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (city.trim() === "") {
      setError("Por favor, ingresa una ciudad");
      setClima(null);
      setErrorApi(null);
    } else {
      setError("");
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&appid=5f3da5be43514d2f2fa95b7d0e3e01d6&units=metric`,
        requestOptions
      )
        .then((response) => {
          if (!response.ok) throw { response };
          return response.json();
        })
        .then((climaData) => {
          setClima(climaData);
          setErrorApi(null);
        })
        .catch((error) => {
          setClima(null);
          setErrorApi(error);
          console.log("error Api ", error);
        });
    }
  };
  return (
    <>
      <InputCiudad
        handleSubmit={handleSubmit}
        city={city}
        setCity={setCity}
        error={error}
        setError={setError}
      />

      <DetalleClima clima={clima} errorApi={errorApi} />
    </>
  );
};

export default Clima;
