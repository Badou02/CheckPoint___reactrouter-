import React from 'react';
import { useParams, Link } from 'react-router-dom';
import allfilms from '../allfilms.json'; // Chemin relatif depuis les fichiers de composants
const FilmDetailsPage = () => {
  const { id } = useParams();
  const film = allfilms.find(film => film.id === parseInt(id));
  

  if (!film) {
    return <div>Film non trouvé</div>;
  }

  return (
    <div>
      <h1>{film.title}</h1>
      <p>{film.description}</p>
      <p>Note: {film.note}</p>
      <a href={film.trailerLink}>Bande-annonce</a>
      <br />
     <nav> <Link to="/App.js">Retour à l'accueil</Link> </nav>
    </div>
  );
}

export default FilmDetailsPage;