import React from "react";

const DetalleClima = ({ clima, errorApi }) => {
  const nuevaFecha = new Date();
  const dia = nuevaFecha.getDate();
  const mes = nuevaFecha.getMonth();

  const fechaActual = dia + "/" + mes;
  return (
    <div className="mt-5">
      {clima && (
        <>
          <div className="container">
            <div className="card mb-3 mx-auto bg-dark text-light">
              <div className="row g-0">
                <div className="col-md-4">
                  <h3>Ciudad: {clima.name} </h3>
                  <h4>Dia: {fechaActual}</h4>
                  <h2>Temperatura: {clima.main.temp}ºC</h2>
                  <p>
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
                    <p>sensación térmica: {clima.main.feels_like} ºC</p>
                    <p>Temperatura max: {clima.main.temp_max} ºC</p>
                    <p>Temperatura min: {clima.main.temp_min} ºC</p>
                    <p>Humedad: {clima.main.humidity} </p>
                    <p>Viento: {clima.wind.speed} Km/h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {errorApi && (
        <h4 className="text-danger text-center">Ingrese otra ciudad</h4>
      )}
    </div>
  );
};

export default DetalleClima;
