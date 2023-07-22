import React from "react";

const DetalleClima = ({ weather }) => {
  return (
    <div>
      {weather && (
        <>
          <div>
            <div>Ciudad: {weather.name} </div>
            <div>Temperatura: {weather.main.temp}ºC</div>
            <div className="card-desc">
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

export default DetalleClima;
