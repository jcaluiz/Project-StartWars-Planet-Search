import { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function useGetPlanet() {
  const { data: dataContext } = useContext(StarWarsContext);
  const [data, setData] = useState();

  useEffect(() => {
    if (dataContext.results !== undefined) {
      setData(dataContext.results.filter((e) => delete e.residents));
    }
  }, [dataContext, setData]);

  return (
    [data]
  );
}

export default useGetPlanet;
