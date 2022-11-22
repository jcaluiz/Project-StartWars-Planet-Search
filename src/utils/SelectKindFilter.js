import { useState, useEffect } from 'react';

export default function SelectKindFilter(
  filterByNumericValues,
  buttonClick,
) {
  const [optionListArray, setOptionListArray] = useState([]);

  useEffect(() => {
    setOptionListArray(['population', 'rotation_period',
      'orbital_period', 'diameter', 'surface_water']);
  }, []);

  useEffect(() => {
    filterByNumericValues.filter((filter, index) => {
      if (index > 2) {
        const strippingStringFromOptions = {
          population: () => {
            setOptionListArray(optionListArray.filter((item) => item
            !== 'population'));
            return setcolumn(optionListArray && optionListArray[0]);
          },
          rotation_period: () => {
            setOptionListArray(optionListArray.filter((item) => item
            !== 'rotation_period'));
            return setcolumn(optionListArray && optionListArray[0]);
          },
          orbital_period: () => {
            setOptionListArray(optionListArray.filter((item) => item
            !== 'orbital_period'));
            return setcolumn(optionListArray && optionListArray[0]);
          },
          diameter: () => {
            setOptionListArray(optionListArray.filter((item) => item
            !== 'diameter'));
            return setcolumn(optionListArray && optionListArray[0]);
          },
          surface_water: () => {
            setOptionListArray(optionListArray.filter((item) => item
            !== 'surface_water'));
            return setcolumn(optionListArray && optionListArray[0]);
          },
        };

        return strippingStringFromOptions[filter.column]();
      }
      if (filterByNumericValues.length === 2) {
        setOptionListArray(optionListArray.filter((item) => item
            !== 'population'));
      }
      return console.log('strippingStringFromOptions');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonClick]);
  return [optionListArray];
}
