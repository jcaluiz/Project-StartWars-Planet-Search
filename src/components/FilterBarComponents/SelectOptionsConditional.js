import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import StarWarsContext from '../../context/StarWarsContext';

export default function SelectOptionsConditional() {
  const { handleSelectCompasion, comparison } = useContext(StarWarsContext);
  return (
    <Form.Select
      aria-label="Default select example"
      data-testid="comparison-filter"
      className="select-input"
      onChange={ (e) => handleSelectCompasion(e) }
      value={ comparison }
    >
      <option>maior que</option>
      <option>menor que</option>
      <option>igual a</option>
    </Form.Select>
  );
}
