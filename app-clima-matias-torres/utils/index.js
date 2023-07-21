async function FetchClimate({ city, api }) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return response;
}

export default FetchClimate;
