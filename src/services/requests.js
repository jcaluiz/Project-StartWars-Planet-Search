const getPlanetAPI = async () => {
  const endpoint = await fetch('https://starwars-oxvej3n7i-jcaluiz.vercel.app/get_planets');
  const dataFetch = await endpoint.json();
  console.log(dataFetch);
  return dataFetch;
};

export default getPlanetAPI;
