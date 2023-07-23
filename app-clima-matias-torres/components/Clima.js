"use client";

import React, { useState } from "react";
import InputCiudad from "./InputCiudad";
import DetalleClima from "./DetalleClima";

const Clima = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
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
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&appid=5f3da5be43514d2f2fa95b7d0e3e01d6&units=metric`,
        requestOptions
      )
        .then((response) => {
          if (!response.ok) throw { response };
          return response.json();
        })
        .then((weatherData) => {
          console.log(weatherData);
          setWeather(weatherData);
        })
        .catch((error) => {
          console.log(error);
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

      <DetalleClima weather={weather} />
    </>
  );
};

export default Clima;
