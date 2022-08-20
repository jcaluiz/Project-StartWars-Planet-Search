import { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function useFilterPlanetTag(state, inputFilter, tag) {
  const [useStatePlanet, setUseStatePlanet] = useState(state);
  useEffect(() => {
    if (state !== undefined) {
      setUseStatePlanet(inputFilter && state
        .filter((e) => e[tag].toLowerCase()
          .includes((inputFilter))));
    }
  }, [inputFilter]);

  return [useStatePlanet];
}

export function useFilterPlanetTagNumber(state, setState) {
  const { buttonClick, setButtonClick, setListActive,
    filterByNumericValues, controlLopping, filterByName } = useContext(StarWarsContext);

  const [controlFilterList, setControlFilterList] = useState(0);
  console.log(controlFilterList);

  const [filterList, setFilterList] = useState(state);
  useEffect(() => {
    if (controlLopping === 0
    && filterByNumericValues !== undefined) {
      setFilterList(state);
    }
  }, [buttonClick]);

  useEffect(() => {
    if (state !== undefined
      && filterByNumericValues !== undefined) {
      setButtonClick(false);
      setControlFilterList((prevState) => prevState + 1);
      filterByNumericValues.filter((filter) => {
        if (filter.comparison === 'maior que' && filterList !== undefined) {
          setFilterList(filterList
            .filter((item) => Number(item[filter.column]) > (Number(filter.value))));
        }
        if (filter.comparison === 'menor que' && filterList !== undefined) {
          setFilterList(filterList
            .filter((item) => Number(item[filter.column]) < (Number(filter.value))));
        }
        if (filter.comparison === 'igual a' && filterList !== undefined) {
          setFilterList(filterList
            .filter((item) => Number(item[filter.column]) === (Number(filter.value))));
        }
        return console.log(filterList);
      });
    }
  }, [buttonClick]);

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
  }, [filterByName]);

  useEffect(() => {
    if (active === false) {
      setActive(true);
    }
  }, [filterList]);

  // const [filterListLength, setFilterListLength] = useState(1);

  // useEffect(() => {
  //   setFilterListLength(filterList && filterList.length);
  // }, [filterList]);

  useEffect(() => {
    setState(filterList);
    if (active === true) {
      return () => setState(filterList);
    }
  });
  setListActive(active);
}

export default useFilterPlanetTag;
