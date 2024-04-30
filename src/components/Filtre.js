import React, { useState,useEffect } from 'react';
import allfilms from '../allfilms.json'; 
const Filtre = () => {
  // État pour stocker la liste de tous les films
  const [films] = useState([allfilms]);

  // État pour stocker les critères de filtrage (titre et note)
  const [filterCriteria, setFilterCriteria] = useState({
    title: '',
    note: '',
  });

  // État pour stocker les films filtrés
  const [filteredFilms,  setFilteredFilms] = useState(allfilms);

  // Fonction de filtrage des films par titre et par note
  const filterFilms = () => {
    const { title, note } = filterCriteria;
    const filtered = films.filter(film => {
      const titleMatch = film.title && film.title.toLowerCase().includes(title.toLowerCase());
      const noteMatch = (note === '' || film.note >= parseFloat(note));
      return titleMatch && noteMatch;
    });
    setFilteredFilms(filtered);
  };

  // Gestionnaire de changement pour le champ de recherche de titre
  const handleTitleChange = (event) => {
    setFilterCriteria({ ...filterCriteria, title: event.target.value });
  };

  // Gestionnaire de changement pour le champ de recherche de note
  const handleNoteChange = (event) => {
    setFilterCriteria({ ...filterCriteria, note: event.target.value });
  };

 // Effectue le filtrage à chaque changement dans les critères de filtrage
 useEffect(() => {
  filterFilms();
}, [filterCriteria]); // Déclenche le filtrage lorsque les critères de filtrage changent


  return (
    <div>
      
      {/* Formulaire de filtrage */}
      <form >
        {/* Champ de recherche par titre */}
        <input
          type="text"
          placeholder="Rechercher par titre"
          value={filterCriteria.title}
          onChange={handleTitleChange}
        />
        {/* Champ de recherche par note */}
        <input
           type="number"
          placeholder="Note minimale"
          value={filterCriteria.note}
          onChange={handleNoteChange}
        />
        </form>
       
     
      {/* Liste des films filtrés */}
      <ul>
        {filteredFilms.map(film => (
          <li key={film.id}>{film.title} - {film.description} - Note: {film.note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filtre;





































































// import React, { useState } from 'react';
// import allfilms from '../allfilms.json';

//   const Filter = ({ onFilter }) => {
//   const [title, setTitle] = useState('');// État pour stocker la liste de tous les films
//   const [note, setNote] = useState('');// État pour stocker la liste de tous les films
  
//   const handleTitleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleNoteChange = (event) => {
//     setNote(event.target.value);
//   };
//   const applyFilters = () => {
//     const filteredFilms = allfilms.filter(film => {
//       const titleMatch = film.title.toLowerCase().includes(title.toLowerCase());
//       const noteMatch = parseFloat(note) ? film.note >= parseFloat(note) : true;
//       return titleMatch && noteMatch;
//     });
//     onFilter(filteredFilms);
//   };
//   return (
   
//     <div className="filter">
//       <input
//         type="text"
//         placeholder="Filter by title"
//         value={title}
//         onChange={handleTitleChange}
//       />
//       <input
//         type="number"
//         placeholder="Filter by rating"
//         value={note}
//         onChange={handleNoteChange}
//       />
//        <button onClick={applyFilters}>Apply Filters</button>
//     </div>
//   );
// }

// export default Filter;