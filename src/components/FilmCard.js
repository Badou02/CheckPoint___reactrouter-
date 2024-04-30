import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
const FilmCard = ({ title, note, description, image,trailerLink }) => {
  return (
   <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title }</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Note:{note}</Card.Text>
        <Card.Text>{trailerLink}</Card.Text>
      </Card.Body>
    </Card>
   </div> 

 
  );
}

export default FilmCard;
