import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

 const FilmCard = ({film}) => { // initialisation du composant 
  return (
   <div>{/* syntaxe jsx avec un div qui rend une carte  */}
   <Card style={{ width: '18rem' }}>  
    <Link to={`/details/${film.id}`}> {/*  Utilisation du composant Link pour créer un lien vers les détails du film, en utilisant l'ID du film : */}
      <Card.Img variant="top" src={film.image} alt={film.title} />    {/*  ajout d'une image à la carte       */}
    </Link >
      <Card.Body>  {/*  ajout du corps de la carte contenant les elements à afficher  */}
        <Card.Title>{film.title }</Card.Title>
        <Card.Text>{film.description}</Card.Text>
        <Card.Text>Note:{film.note}</Card.Text>
        <Card.Text>{film.trailerLink}</Card.Text>
      </Card.Body>
    </Card>
   </div> 

 
  );
}

export default FilmCard;
