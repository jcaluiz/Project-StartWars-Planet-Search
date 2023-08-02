import { useEffect, useState } from 'react';

function useGetPlanet() {
  const [data, setData] = useState([]);
  const getPlanetAPI = async () => {
    const endpoint = await fetch('https://starwars-oxvej3n7i-jcaluiz.vercel.app/get_planets');
    const dataFetch = await endpoint.json();
    setData(dataFetch);
  };

  useEffect(() => {
    getPlanetAPI();
  }, []);

  return (
    { data }
  );
}

export default useGetPlanet;
