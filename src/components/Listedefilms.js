import allfilms from '../allfilms.json'
import React from 'react';
import FilmCard from './FilmCard';

const ListeDeFilms = ({ films }) => {
  return (
    <div className="film-list">
      {allfilms.map((film, index) => (
        <FilmCard
          key={index}
          title={film.title} 
          description={film.description} 
          image={film.image} 
          note={film.note} 
        />
      ))}
    </div>
  );
};

export default ListeDeFilms;