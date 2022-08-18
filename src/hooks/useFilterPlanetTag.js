import { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function useFilterPlanetTag(state, setState, inputFilter, tag) {
  useEffect(() => {
    if (state !== undefined) {
      setState(inputFilter ? state
        .filter((e) => e[tag].toLowerCase()
          .includes((inputFilter))) : state);
    }
  }, [inputFilter]);

  return { resultFilter: inputFilter && state ? state.filter((e) => e[tag]
    .includes((inputFilter))) : state };
}

export function useFilterPlanetTagNumber(state, setState) {
  const { buttonClick, setButtonClick,
    filterByNumericValues } = useContext(StarWarsContext);
  const { column,
    comparison, value } = filterByNumericValues;

  useEffect(() => {
    if (buttonClick === true && state !== undefined
      && filterByNumericValues !== undefined) {
      setButtonClick(false);
      switch (comparison) {
      case 'maior que':
        return setState(column !== '' ? state
          .filter((item) => item[column] > (Number(value)))
          : console.log(state
            .filter((item) => item.population > (Number(value)))));
      case 'menor que':
        return setState(column !== '' ? state
          .filter((item) => item[column] < (Number(value)))
          : state
            .filter((item) => item.population < (Number(value))));
      case 'igual a':
        return setState(state.filter((item) => Number(item[column]) === (Number(value))));
      default:
        return state;
      }
    }
  }, [buttonClick]);
}

export default useFilterPlanetTag;
