import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState();
  const [filterByNumber, setFilterByNumber] = useState();
  const [resultFilterPlanet, setResultFilterPlanet] = useState();

  const getPlanetAPI = async () => {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const dataFetch = await fetch(endpoint).then((response) => response.json());
    setData(dataFetch);
  };

  useEffect(() => getPlanetAPI(), []);

  const handleChangeName = ({ target: { value } }) => setFilterByName(value);

  const handleChangeNumber = ({ target: { value } }) => setFilterByNumber(value);

  const myContext = {
    data,
    handleChangeName,
    filterByName,
    handleChangeNumber,
    filterByNumber,
    setResultFilterPlanet,
    resultFilterPlanet,
  };

  return (
    <StarWarsContext.Provider value={ myContext }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = ({
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
});

StarWarsProvider.defaultProps = ({
  children: {},
});

export default StarWarsProvider;
