function filterPlanetTagNumber(
  state, numberValue = undefined, comparison, column,
) {
  const conditional = {
    'maior que': state.filter((filter) => Number(filter[column]) > Number(numberValue)),
    'menor que': state.filter((filter) => Number(filter[column]) < Number(numberValue)),
    'igual a': state.filter((filter) => Number(filter[column]) === Number(numberValue)),
  };
  if (comparison === 'maior que' && column === 'population' && numberValue === '0') {
    return state;
  }
  if ((state !== undefined || numberValue !== undefined)) {
    return conditional[comparison];
  }
  return state;
}

export default filterPlanetTagNumber;
