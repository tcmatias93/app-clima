"use client";

import React, { useState } from "react";
let clave = process.env.CLAVE_API;

const InputCiudad = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [errrorApi, setErrorApi] = useState("");
  const [weather, setWeather] = useState(null);

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
      {errrorApi && <div style={{ color: "red" }}>{errrorApi}</div>}

      {weather && (
        <>
          <div>
            <div>Ciudad: {weather.name} </div>
            <div>Temperatura: {weather.main.temp}ºC</div>
            <div className="card-desc">
              {" "}
              Clima:
              <img
                src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt="icon"
              />
              {weather.weather[0].description}
            </div>
            <div>Viento: {weather.wind.speed} Km/h</div>
          </div>
          <div>
            <p>Temperatura max: {weather.main.temp_max} ºC</p>
            <p>Temperatura min: {weather.main.temp_min} ºC</p>
            <p>Humedad: {weather.main.humidity} </p>
          </div>
        </>
      )}
    </div>
  );
};

export default InputCiudad;
