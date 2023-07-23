import React from "react";

const DetalleClima = ({ clima }) => {
  return (
    <div className="mt-5">
      {clima && (
        <>
          <div className="container">
            <div className="card mb-3 mx-auto bg-dark text-light">
              <div className="row g-0">
                <div className="col-md-4">
                  <h3 className="card-titule">Ciudad: {clima.name} </h3>
                  <p className="card-date">Dia:</p>
                  <h2 className="card-temp">
                    Temperatura: {clima.main.temp}ºC
                  </h2>
                  <p className="card-desc">
                    <img
                      src={`http://openweathermap.org/img/w/${clima.weather[0].icon}.png`}
                      alt="icon"
                      height={150}
                      width={150}
                    />
                    {clima.weather[0].description}
                  </p>
                </div>
                <div className="col-md-8">
                  <div className="card-body text-start mt-2">
                    <p className="card-text">
                      sensación térmica: {clima.main.feels_like} ºC
                    </p>
                    <p className="card-text">
                      Temperatura max: {clima.main.temp_max} ºC
                    </p>
                    <p className="card-text">
                      Temperatura min: {clima.main.temp_min} ºC
                    </p>
                    <p className="card-text">Humedad: {clima.main.humidity} </p>
                    <p className="card-text">Viento: {clima.wind.speed} Km/h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetalleClima;
