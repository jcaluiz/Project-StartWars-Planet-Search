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

  const INITIAL_CONTROLLOPPING = -1;
  const [controlLopping, setControlLopping] = useState(INITIAL_CONTROLLOPPING);
  const handleClick = () => {
    setButtonClick(true);
    setControlLopping((prevState) => prevState + 1);
  };

  const [column, setcolumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');

  const handleSelectChange = ({ target }) => setcolumn(target.value);
  const handleSelectCompasion = ({ target }) => setComparison(target.value);

  const [filterByNumericValues, setFilterByNumericValues] = useState([{
    column,
    comparison,
    value,
  }]);

  const [addFilter, setAddFilter] = useState([]);
  const [stateForAddFilterList, setStateForAddFilterList] = useState();
  const [addFilterList,
    setAddFilterList] = useState();

  useEffect(() => {
    if (buttonClick === true && controlLopping === addFilter.length) {
      setAddFilter((prevState) => [...prevState, filterByNumericValues]);
    }
    console.log(addFilter);
  }, [buttonClick]);

  const [addFilterListControl, setAddFilterListControl] = useState(0);
  useEffect(() => {
    if (stateForAddFilterList !== undefined
      && addFilterListControl === 0) {
      //   console.log('funciona');
      setAddFilterList(stateForAddFilterList);
      setAddFilterListControl((prevState) => prevState + 1);
    }
  }, [stateForAddFilterList]);

  useEffect(() => {
    if ((controlLopping === addFilter.length && addFilterList !== undefined
    )) {
      setAddFilterList((prevState) => [...prevState, stateForAddFilterList]);
    }
  }, [addFilterList, stateForAddFilterList]);
  console.log(stateForAddFilterList);
  console.log(addFilterList);
  // console.log(addFilterList && addFilterList[addFilterList.length - 1]);
  // console.log(addFilterList && addFilterList[addFilterList.length - 2]);

  useEffect(() => {
    setFilterByNumericValues((prevState) => [...prevState, {
      column, comparison, value }]);
  }, [value, comparison, column]);

  // const [filterList, setFilterList] = useState(state);

  // useEffect(() => {
  //   if (state !== undefined
  //     && filterByNumericValues !== undefined) {
  //     setButtonClick(false);
  //     setControlFilterList((prevState) => prevState + 1);
  //     filterByNumericValues.filter((filter) => {
  //       if (filter.comparison === 'maior que' && filterList !== undefined) {
  //         setFilterList(filterList
  //           .filter((item) => Number(item[filter.column]) > (Number(filter.value))));
  //       }
  //       if (filter.comparison === 'menor que' && filterList !== undefined) {
  //         setFilterList(filterList
  //           .filter((item) => Number(item[filter.column]) < (Number(filter.value))));
  //       }
  //       if (filter.comparison === 'igual a' && filterList !== undefined) {
  //         setFilterList(filterList
  //           .filter((item) => Number(item[filter.column]) === (Number(filter.value))));
  //       }
  //       return console.log(filterList);
  //     });
  //   }
  // }, [buttonClick]);

  const [listActive, setListActive] = useState(false);
  console.log(listActive);

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
    addFilter,
    controlLopping,
    setAddFilterList,
    addFilterList,
    setStateForAddFilterList,
    setListActive,
    listActive,
    setcolumn,
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
