import React, { useContext } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import SelectOptionsConditional from './SelectOptionsConditional';
import ButtonComponents from './ButtonComponents';
import StarWarsContext from '../../context/StarWarsContext';
import ComparisonFilter from './ComparisonFilter';

export default function FilterBar() {
  const { value, handleClick, handleChangeName,
    handleChangeNumber } = useContext(StarWarsContext);

  return (
    <div id="input-container">
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text
          id="inputGroup-sizing-sm"
          htmlFor="name-filter"
        >
          Pesquise por nome
        </InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          type="text"
          data-testid="name-filter"
          id="name-filter"
          onChange={ (e) => handleChangeName(e) }
        />
      </InputGroup>
      <SelectOptionsConditional />
      <br />
      {/* {columnFilter()} */}
      <ComparisonFilter />
      <br />
      <div id="number-filter-container">
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text
            id="inputGroup-sizing-sm"
            htmlFor="number-filter"
          >
            Pesquise por número
          </InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            type="number"
            data-testid="value-filter"
            id="number-filter"
            value={ value }
            onChange={ (e) => handleChangeNumber(e) }
          />
        </InputGroup>
        <ButtonComponents
          dataTestId="button-filter"
          id="button-filter"
          onClick={ handleClick }
        >
          Filtro
        </ButtonComponents>
      </div>
    </div>
  );
}
