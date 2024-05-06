import React from 'react';
import ListeDeFilms from './Listedefilms';
import Navbar  from './Navbar';
const HomePage = () => {
  return (
    <div>
      <Navbar/> {/* appel du fichier Navbar */}
      <ListeDeFilms /> {/* appel du fichier */}
    </div>
  );
}

export default HomePage;

