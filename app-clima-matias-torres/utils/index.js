const apiKey = process.env.CLIMA_API;

const urlApi = `api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`;

async function FetchClimate({ city }) {
  const response = await fetch(`${urlApi}${city}`);
  const data = await response.json();

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return console.log(data.json());
}

export default FetchClimate;
