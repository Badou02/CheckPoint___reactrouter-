import React from 'react';
import FilmCard from './FilmCard';

const ListeDeFilms = ({ films }) => {
  return (
    <div className="film-list">
      {films.map((film, index) => (
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