import React, { useContext, useEffect, useState } from 'react';
import useGetPlanet from '../hooks/useGetPlanet';
import StarWarsContext from '../context/StarWarsContext';
import filterPlanetTagNumber from '../utils/filterPlanetTagNumber';

function Table() {
  const { data } = useGetPlanet();
  const { filterByName, value, comparison, column,
    buttonClick, setButtonClick, headers } = useContext(StarWarsContext);
  const [table, setTable] = useState();

  const planetsListStatic = data
    .filter(({ name }) => name.toLowerCase().includes(filterByName.toLowerCase()));

  const renderTable = buttonClick
    ? filterPlanetTagNumber(planetsListStatic, value, comparison, column)
    : planetsListStatic;

  useEffect(() => { // Assim que renderiza, recebe os planetas de forma estática
    setTable(data);
  }, [data]);

  useEffect(() => { // Assim que digita pelo nome, filtra pelo nome
    setTable(planetsListStatic);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByName]);

  useEffect(() => { // renderiza quando clica no botão, em pesquisa por número e tipo
    if (buttonClick) {
      setTable(renderTable);
    }
    setButtonClick(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonClick]);

  return (
    <table>
      <thead>
        <tr>
          {
            headers.map((tagHead) => (
              <th scope="col" key={ tagHead }>{tagHead}</th>
            ))
          }
        </tr>
      </thead>
      {
        table && table.map((item) => (
          <tbody key={ item.name + item.population }>
            <tr>
              { Object.values(item).map((itemOfValue) => (
                <td key={ itemOfValue[12] }>{itemOfValue}</td>
              ))}
            </tr>
          </tbody>
        ))
      }
    </table>
  );
}

export default Table;
