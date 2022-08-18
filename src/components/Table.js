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
    comparison } = useContext(StarWarsContext);

  const [renderList, setRenderList] = useState(data);

  useEffect(() => setDataPlanet(data), [data]);

  // Para filtrar o nome
  useFilterPlanetTag(data, setRenderList, filterByName, 'name');
  // Para filtrar o numero
  useFilterPlanetTagNumber(data, setRenderList);

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
      <table>
        <thead>
          <tr>
            {dataPlanet && Object.keys(dataPlanet[0]).map((tagHead) => (
              <th scope="col" key={ tagHead }>{tagHead}</th>
            ))}
          </tr>
        </thead>
        {renderList ? renderList.map((item, index) => (
          <tbody key={ index }>
            <tr>
              { Object.values(item).map((itemOfValue) => (
                <td key={ itemOfValue[12] }>{itemOfValue}</td>
              ))}
            </tr>
          </tbody>
        )) : (
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
