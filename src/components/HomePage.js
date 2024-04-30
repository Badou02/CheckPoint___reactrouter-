import React from 'react';
 import allfilms from '../allfilms.json';// Chemin relatif depuis les fichiers de composants
import { Link } from 'react-router-dom';
 import FilmCard from './FilmCard';
 
 const HomePage = () => {
   return (
     <div>
      <h1>Accueil</h1>
      <div className="film-list">
        {allfilms.map(film => (
          <Link to={`/details/${film.id}`} key={film.id}>
             <FilmCard
               title={film.title}
               description={film.description}
              note={film.note}
              image={film.image}
               trailerLink={film.trailerLink}
             />
           </Link >
        ))}
       </div>
     </div>
   );
 }

 export default HomePage;
