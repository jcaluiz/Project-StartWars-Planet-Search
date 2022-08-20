import { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function useGetPlanet() {
  const { data: dataContext } = useContext(StarWarsContext);
  const [data, setDataPlanet] = useState();

  useEffect(() => {
    if (dataContext.results !== undefined) {
      setDataPlanet(dataContext.results.filter((e) => delete e.residents));
    }
  }, [dataContext, setDataPlanet]);

  return (
    [data, setDataPlanet]
  );
}

export default useGetPlanet;
