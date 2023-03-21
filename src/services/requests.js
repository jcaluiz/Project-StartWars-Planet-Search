const getPlanetAPI = async () => {
  const endpoint = await fetch('https://starwars-api-production.up.railway.app/get_planets');
  const dataFetch = await endpoint.json();
  console.log(dataFetch);
  return dataFetch;
};

export default getPlanetAPI;
