import React, { useContext, useEffect, useState } from 'react';
import useGetPlanet from '../hooks/useGetPlanet';
import StarWarsContext from '../context/StarWarsContext';
import useFilterPlanetTag from '../hooks/useFilterPlanetTag';
import useComparisonOperators, { results } from '../hooks/useComparisonOperator';

function Table() {
  const [dataPlanet, setDataPlanet] = useState();
  const [data] = useGetPlanet();
  const { handleChangeName, filterByName, handleChangeNumber,
    filterByNumber, setResultFilterPlanet } = useContext(StarWarsContext);

  const [renderList, setRenderList] = useState(data);
  const [tagForNumber, setTagForNumber] = useState('');
  const [comparison, setComparison] = useState();

  results(dataPlanet);

  const handleSelectChange = ({ target }) => setTagForNumber(target.value);
  const handleSelectCompasion = ({ target }) => setComparison(target.value);

  useEffect(() => {
    setDataPlanet(data);
  }, [data, filterByName]);

  // Para filtrar o nome
  const { resultFilter } = useFilterPlanetTag(data, setRenderList, filterByName, 'name');

  setResultFilterPlanet(resultFilter);

  // useFilterPlanetTag(renderList, setRenderList, filterByNumber, tagForNumber);

  useComparisonOperators(setRenderList, comparison, filterByNumber, tagForNumber);

  return (
    <>
      <label htmlFor="name-filter">
        Pesquise por nome
        {' '}
        <input
          type="text"
          data-testid="column-filter"
          id="name-filter"
          onChange={ (e) => handleChangeName(e) }
        />
      </label>
      <select onChange={ (e) => handleSelectChange(e) } data-testid="column-filter">
        <option>rotation_period</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>surface_water</option>
        <option>population</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => handleSelectCompasion(e) }
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
          data-testid="column-filter"
          id="number-filter"
          onChange={ (e) => handleChangeNumber(e) }
        />
      </label>
      <table>
        <thead>
          <tr>
            {dataPlanet && Object.keys(dataPlanet[0]).map((tagHead) => (
              <th scope="col" key={ tagHead }>{tagHead}</th>
            ))}
          </tr>
        </thead>
        {renderList && renderList.map((item, index) => (
          <tbody key={ index }>
            <tr>
              { Object.values(item).map((itemOfValue) => (
                <td key={ itemOfValue[12] }>{itemOfValue}</td>
              ))}
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}

export default Table;
