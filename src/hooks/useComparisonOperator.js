// import React, { useContext } from 'react';
// import StarWarsContext from '../context/StarWarsContext';

import { useEffect } from 'react';

let resultado;

export const results = (state) => {
  resultado = state;
};

function useComparisonOperators(setState, oparator, inputFilter, tag) {
  useEffect(() => {

  });
  switch (oparator) {
  case 'maior que':
    return setState(inputFilter ? resultado
      .filter((e) => e[tag] > (inputFilter)) : resultado);
  case 'menor que':
    return setState(inputFilter ? resultado
      .filter((e) => e[tag] < (inputFilter)) : resultado);
  case 'igual a':
    return setState(inputFilter ? resultado
      .filter((e) => e[tag] === (inputFilter)) : resultado);
  default:
    return results;
  }
//   if (oparator === 'maior que' && tag !== undefined && inputFilter !== undefined) {
//     setState(inputFilter ? results.filter((e) => e[tag]
//       .toLowerCase() > (inputFilter)) : results);
//   }
//   if (oparator === 'menor que' && tag !== undefined && inputFilter !== undefined) {
//     setState(inputFilter ? results.filter((e) => e[tag]
//       .toLowerCase() < (inputFilter)) : results);
//   }
//   if (oparator === 'igual a' && tag !== undefined && inputFilter !== undefined) {
//     setState(inputFilter ? results.filter((e) => e[tag]
//       .toLowerCase() === (inputFilter)) : results);
//   }
}

export default useComparisonOperators;
