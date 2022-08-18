import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [resultFilterPlanet, setResultFilterPlanet] = useState();
  const [buttonClick, setButtonClick] = useState(false);

  const getPlanetAPI = async () => {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const dataFetch = await fetch(endpoint).then((response) => response.json());
    setData(dataFetch);
  };

  useEffect(() => getPlanetAPI(), []);

  const handleChangeName = ({ target: { value } }) => setFilterByName(value);

  const [value, setvalue] = useState(0);
  const handleChangeNumber = ({ target:
     { value: valueNumber } }) => setvalue(valueNumber);

  const handleClick = () => {
    setButtonClick(true);
  };

  const [column, setcolumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');

  const handleSelectChange = ({ target }) => setcolumn(target.value);
  const handleSelectCompasion = ({ target }) => setComparison(target.value);

  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column,
    comparison,
    value,
  });

  useEffect(() => {
    setFilterByNumericValues({
      column, comparison, value });
  }, [value, comparison, column]);

  const myContext = {
    data,
    handleChangeName,
    filterByName,
    handleChangeNumber,
    value,
    setResultFilterPlanet,
    resultFilterPlanet,
    handleClick,
    setButtonClick,
    buttonClick,
    setFilterByNumericValues,
    filterByNumericValues,
    handleSelectChange,
    handleSelectCompasion,
    column,
    comparison,
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
