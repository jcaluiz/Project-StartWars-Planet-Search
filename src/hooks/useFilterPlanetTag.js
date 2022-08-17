import { useEffect } from 'react';

function useFilterPlanetTag(state, setState, inputFilter, tag) {
  useEffect(() => {
    if (state !== undefined) {
      setState(inputFilter ? state.filter((e) => e[tag].toLowerCase()
        .includes((inputFilter))) : state);
    }
  }, [inputFilter, state, setState, tag]);
  return { resultFilter: inputFilter ? state.filter((e) => e[tag].toLowerCase()
    .includes((inputFilter))) : state };
}

export default useFilterPlanetTag;
