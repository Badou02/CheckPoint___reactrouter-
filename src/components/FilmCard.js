import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const FilmCard = ({ title, note, description, image,trailerLink }) => {
  return (
   <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title }</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Note: {note }</Card.Text>
        <Link to={`/details/${title}`} className="btn btn-primary">Voir Détails</Link>
      </Card.Body>
    </Card>
   </div> 

 
  );
}

export default FilmCard;
