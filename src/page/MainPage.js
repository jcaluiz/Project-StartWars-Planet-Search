import React from 'react';
import FilterBar from '../components/FilterBarComponents/FilterBar';
import Image from '../components/FilterBarComponents/Image';
import Table from '../components/Table';
import nave1 from '../images/nave-starwars.png';

export default function MainPage() {
  return (
    <>
      <div id="logo-container">

        <Image
          className="img-responsive logo"
          source="http://imageshack.com/a/img922/3783/oyvsRd.png"
          alt="imagem logo Star Wars"
        />
      </div>
      <div>
        <Image
          className="img-nav"
          source={ nave1 }
          alt="nave-starwars-1"
          id="nave-starwars-1"
        />
      </div>
      <FilterBar />
      <Table />
    </>
  );
}
