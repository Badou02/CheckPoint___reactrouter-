 import React, { useState } from 'react';
 
  function Newform() {
    const [films, setFilms] = useState([
      { title: 'Film 1', note: 8, image: 'image1.jpg' },
      { title: 'Film 2', note: 7, image: 'image2.jpg' },
      // Autres films...
    ]);
 
    const [newFilm, setNewFilm] = useState({
      title: '',
      note: '',
      image: ''
    });
 
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewFilm({ ...newFilm, [name]: value });
    };
 
    const handleSubmit = (e) => {
      e.preventDefault();
      setFilms([...films, newFilm]);
      setNewFilm({ title: '', note: '', image: '' }); // Réinitialiser le formulaire après soumission
    };
 
    return (
      <div  >
        <h1>Liste de Films</h1>
        <form className="form-container"  onSubmit={handleSubmit}>
          <label >
            Titre:
            <input
              type="text"
              name="title"
              value={newFilm.title}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Note:
            <input
              type="number"
              name="note"
              value={newFilm.note}
              onChange={handleInputChange}
            />
        </label>
          <label>
            URL de l'image:
            <input
              type="text"
              name="image"
              value={newFilm.image}
              onChange={handleInputChange}
            />
          </label>
          <button  type="submit" className="form-button">Ajouter un Film</button>
       </form>
       
        <div className='divv'>  
       <h2>Nouvelle films Ajouter</h2>
          <ul>
             
          {films.map((film, index) => (
            <li key={index}>
              <img src={film.image} alt={film.title} />
              <div>
                <h2>{film.title}</h2>
                <p>Note: {film.note}</p>
              </div>
            </li>
           
          ))}
        </ul> 
        </div>
       </div>
       
    );
  }
 
  export default Newform;
 
