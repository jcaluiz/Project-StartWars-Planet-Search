import React, { useContext, useEffect, useState } from 'react';
import useGetPlanet from '../hooks/useGetPlanet';
import StarWarsContext from '../context/StarWarsContext';
import useFilterPlanetTag,
{ useFilterPlanetTagNumber } from '../hooks/useFilterPlanetTag';

function Table() {
  const [dataPlanet, setDataPlanet] = useState();
  const [data] = useGetPlanet();
  const { handleChangeName, filterByName, handleChangeNumber,
    value, handleClick, handleSelectChange,
    handleSelectCompasion, column,
    comparison, addFilter,
    setStateForAddFilterList, listActive } = useContext(StarWarsContext);

  const [renderList, setRenderList] = useState(data);

  useEffect(() => {
    setDataPlanet(data);
  }, [data]);

  const [listFromNumber, setListFromNumber] = useState(data);

  // Para filtrar o nome
  const [useStatePlanet] = useFilterPlanetTag(data, filterByName, 'name');
  // Para filtrar o numero
  useFilterPlanetTagNumber(data, setListFromNumber);

  useEffect(() => {
    setRenderList(useStatePlanet);
  }, [useStatePlanet]);

  useEffect(() => {
    setRenderList(listFromNumber);
  }, [listFromNumber]);

  setStateForAddFilterList(renderList);

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
      <form>

        <label htmlFor="name-filter">
          Pesquise por nome
          {' '}
          <input
            type="text"
            data-testid="name-filter"
            id="name-filter"
            onChange={ (e) => handleChangeName(e) }
          />
        </label>
        <select
          onChange={ (e) => handleSelectChange(e) }
          data-testid="column-filter"
          value={ column }
        >
          <option>population</option>
          <option>rotation_period</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ (e) => handleSelectCompasion(e) }
          value={ comparison }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <label htmlFor="number-filter">
          Pesquise por número
          {' '}
          <input
            type="number"
            data-testid="value-filter"
            id="number-filter"
            value={ value }
            onChange={ (e) => handleChangeNumber(e) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtro

        </button>
      </form>
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
