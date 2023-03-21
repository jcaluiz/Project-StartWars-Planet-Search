import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import MainPage from './page/MainPage';

function App() {
  return (
    <StarWarsProvider>
      <MainPage />
    </StarWarsProvider>
  );
}

export default App;
