import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [filterByName, setFilterByName] = useState('');
  const [buttonClick, setButtonClick] = useState(false);

  const handleChangeName = ({ target: { value } }) => setFilterByName(value);

  const [value, setvalue] = useState(0);
  const handleChangeNumber = ({ target:
    { value: valueNumber } }) => setvalue(valueNumber);

  const handleClick = () => {
    setButtonClick(true);
    setControlLopping((prevState) => prevState + 1);
  };

  const [column, setcolumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');

  const handleSelectChange = ({ target }) => setcolumn(target.value);
  const handleSelectCompasion = ({ target }) => setComparison(target.value);

  const headers = ['name', 'orbital_period', 'climate', 'gravity',
    'surface_water', 'rotation_period', 'id', 'diameter', 'terrain', 'population'];

  const myContext = {
    handleChangeName,
    filterByName,
    handleChangeNumber,
    value,
    handleClick,
    setButtonClick,
    buttonClick,
    handleSelectChange,
    handleSelectCompasion,
    column,
    comparison,
    headers,
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
