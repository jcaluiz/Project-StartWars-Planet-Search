import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import useGetPlanet from '../hooks/useGetPlanet';
import StarWarsContext from '../context/StarWarsContext';
import useFilterPlanetTag,
{ useFilterPlanetTagNumber } from '../hooks/useFilterPlanetTag';
import SelectKindFilter from '../utils/SelectKindFilter';
import nave1 from '../images/nave-starwars.png';

function Table() {
  const [dataPlanet, setDataPlanet] = useState();
  const [data] = useGetPlanet();
  const { handleChangeName, filterByName, handleChangeNumber,
    value, handleClick, handleSelectChange,
    handleSelectCompasion, column, buttonClick,
    comparison, addFilter, filterByNumericValues,
    setStateForAddFilterList, listActive } = useContext(StarWarsContext);

  const [renderList, setRenderList] = useState(data);

  useEffect(() => {
    setDataPlanet(data);
  }, [data]);

  const [listFromNumber, setListFromNumber] = useState(data);

  // Para filtrar o nome
  const [useStatePlanet] = useFilterPlanetTag(data, filterByName);

  // Para filtrar o numero
  useFilterPlanetTagNumber(data, setListFromNumber);

  useEffect(() => {
    setRenderList(useStatePlanet);
  }, [useStatePlanet]);

  useEffect(() => {
    setRenderList(listFromNumber);
  }, [listFromNumber]);

  setStateForAddFilterList(renderList);

  const [optionListArray] = SelectKindFilter(filterByNumericValues,
    buttonClick);

  const columnFilter = () => (
    <Form.Select
      aria-label="Default select example"
      data-testid="comparison-filter"
      className="select-input"
      onChange={ (e) => handleSelectChange(e) }
      value={ column }
    >
      {optionListArray.map((option) => (
        <option key={ option }>{option}</option>
      ))}
    </Form.Select>
  );

  const elementList = () => (listActive ? renderList && renderList.map((item, index) => (
    <tbody key={ index }>
      <tr>
        { Object.values(item).map((itemOfValue) => (
          <td key={ itemOfValue[12] }>{itemOfValue}</td>
        ))}
      </tr>
    </tbody>
  )) : (
    renderList && renderList.map((item, index) => (
      <tbody key={ index }>
        <tr>
          { Object.values(item).map((itemOfValue) => (
            <td key={ itemOfValue[12] }>{itemOfValue}</td>
          ))}
        </tr>
      </tbody>
    ))
  ));

  return (
    <>
      <div id="logo-container">

        <img
          className="img-responsive logo"
          src="http://imageshack.com/a/img922/3783/oyvsRd.png"
          alt="imagem logo Star Wars"
        />
      </div>
      <div>
        <img
          src={ nave1 }
          alt="imagem nave starwars"
          id="nave-starwars-1"
        />
      </div>
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
        <br />
        {columnFilter()}
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
          <Button
            type="button"
            data-testid="button-filter"
            id="button-filter"
            onClick={ handleClick }
          >
            Filtro
          </Button>
        </div>
      </div>
      {addFilter && addFilter
        .map((filtroAdicionado, index) => (
          <p key={ index }>
            {filtroAdicionado.column}
            {' '}
            {filtroAdicionado.comparison}
            {' '}
            {filtroAdicionado.value}
            {' '}
          </p>
        ))}
      <table>
        <thead>
          <tr>
            {dataPlanet && Object.keys(dataPlanet[0]).map((tagHead) => (
              <th scope="col" key={ tagHead }>{tagHead}</th>
            ))}
          </tr>
        </thead>
        {renderList ? elementList()
          : (
            data && data.map((item, index) => (
              <tbody key={ index }>
                <tr>
                  { Object.values(item).map((itemOfValue) => (
                    <td key={ itemOfValue[12] }>{itemOfValue}</td>
                  ))}
                </tr>
              </tbody>
            )))}
      </table>
    </>
  );
}

export default Table;
