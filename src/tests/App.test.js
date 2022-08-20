import React from 'react';
import { render, screen } from '@testing-library/react';
import { data } from './mocks/data';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testando a aplicação', () => {
  afterEach(() => jest.clearAllMocks());
  test('Verifica se tudo está funcionando bem', async () => {
    
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(data),
    }));

    const planets = data.results;
  
  
    render(<App />);
    const button = screen.getByRole('button', { name: 'Filtro'});
    const planetAlderaan = await screen.findByText(/Alderaan/i);
    const namePlanets = [];
    const rotationPlanets = [];
    planets.map((planet) => {
      namePlanets.push(planet.name);
      rotationPlanets.push(Number(planet.rotation_period));
    })

      const planet0 = await screen.findByText(namePlanets[0]);
      const planet1 = await screen.findByText(namePlanets[1]);
      const planet2 = await screen.findByText(namePlanets[2]);
      const planet3 = await screen.findByText(namePlanets[3]);
      const planet4 = await screen.findByText(namePlanets[4]);
      const planet5 = await screen.findByText(namePlanets[5]);
      const planet6 = await screen.findByText(namePlanets[6]);
      const planet7 = await screen.findByText(namePlanets[7]);
      const planet8 = await screen.findByText(namePlanets[8]);
      const planet9 = await screen.findByText(namePlanets[9]);
      expect(planet0).toBeInTheDocument();
      expect(planet1).toBeInTheDocument();
      expect(planet2).toBeInTheDocument();
      expect(planet3).toBeInTheDocument();
      expect(planet4).toBeInTheDocument();
      expect(planet5).toBeInTheDocument();
      expect(planet6).toBeInTheDocument();
      expect(planet7).toBeInTheDocument();
      expect(planet8).toBeInTheDocument();
      expect(planet9).toBeInTheDocument();

      console.log(rotationPlanets);

      const planetRotation23 = await screen.findAllByText(23);
      const planetRotation24 = await screen.findAllByText(24);
      const planetRotation18 = await screen.findAllByText(18);
      // const planetRotation2 = await screen.findAllByText(rotationPlanets[2]);
      // const planetRotation3 = await screen.findAllByText(rotationPlanets[3]);
      // const planetRotation4 = await screen.findAllByText(rotationPlanets[4]);
      // const planetRotation5 = await screen.findAllByText(rotationPlanets[5]);
      // const planetRotation6 = await screen.findAllByText(rotationPlanets[6]);
      // const planetRotation7 = await screen.findAllByText(rotationPlanets[7]);
      // const planetRotation8 = await screen.findAllByText(rotationPlanets[8]);
      // const planetRotation9 = await screen.findAllByText(rotationPlanets[9]);
      expect(planetRotation23[0]).toBeInTheDocument();
      expect(planetRotation23).toHaveLength(3);
      expect(planetRotation24[0]).toBeInTheDocument();
      expect(planetRotation24).toHaveLength(3);
      expect(planetRotation18[0]).toBeInTheDocument();
      expect(planetRotation18).toHaveLength(1);

      const inputNumber = screen.getByTestId('value-filter');
      userEvent.click(inputNumber);
      userEvent.type(inputNumber, '200000');
      userEvent.click(button);

      expect(planetRotation23[0]).not.toBeInTheDocument();


    // const 
    console.log(namePlanets);
    expect(button).toBeInTheDocument();
    expect(planetAlderaan).toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://swapi-trybe.herokuapp.com/api/planets/');
  })
})