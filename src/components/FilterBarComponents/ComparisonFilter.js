import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import StarWarsContext from '../../context/StarWarsContext';

export default function ComparisonFilter() {
  const { column, handleSelectChange } = useContext(StarWarsContext);

  return (
    <Form.Select
      aria-label="Default select example"
      data-testid="comparison-filter"
      className="select-input"
      onChange={ (e) => handleSelectChange(e) }
      value={ column }
    >
      <option>population</option>
      <option>rotation_period</option>
      <option>orbital_period</option>
      <option>diameter</option>
      <option>surface_water</option>
    </Form.Select>
  );
}
