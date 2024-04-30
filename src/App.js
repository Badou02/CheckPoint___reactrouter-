import './App.css';
import React, { useState,useEffect } from 'react';
import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider,Route,Link,Routes} from "react-router-dom";
import allfilms from './allfilms.json';
import Navbar from './components/Navbar.js';
import Filtre from './components/Filtre.js';
import NewFilmForm from './components/NewFilmForm.js';
import Listedefilms from './components/Listedefilms.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import FilmCard from './components/FilmCard.js'
import HomePage from './components/HomePage.js';
import FilmDetailsPage from './components/FilmDetailsPage.js';




function App()  {
 // État pour stocker la liste de tous les films
 const [films] = useState([allfilms]); // Initialisez avec une liste vide ou avec les données initiales
 // État pour stocker les films filtrés
 const [ filteredFilms,setFilteredFilms] = useState([]);
 // État pour stocker les critères de filtrage (titre et note)
 const [filterCriteria, setFilterCriteria] = useState({
  title: '',
  note: '',
});
 // Effectue le filtrage à chaque changement dans les critères de filtrage
 useEffect(() => {
  filterFilms();}, [filterCriteria]); // Déclenche le filtrage lorsque les critères de filtrage changent
 // Fonction pour filtrer les films en fonction des critères de filtrage sélectionnés
 const filterFilms = () => {
  const { title, note } = filterCriteria;
  const filtered = films.filter(film => {
    const titleMatch =  film.title && film.title.toLowerCase().includes(title.toLowerCase());
    const noteMatch = (note === '' || film.note >= parseFloat(note));
    return titleMatch && noteMatch;
  });
  setFilteredFilms(filtered);
};
// Fonction pour mettre à jour les critères de filtrage
const handleFilter = (newFilterCriteria) => {
  setFilterCriteria(newFilterCriteria);
};
 


  return (
  <>
  <Navbar/> 
 <Listedefilms/> 
 <Filtre  onFilter={handleFilter}/>
 <NewFilmForm  />

  <Routes>
    <Route path="/FilmDetailspage:id" element={< FilmDetailsPage/>} />  
    <Route path="/homepage" element={<  HomePage />} />
    <Route path="/Listedefilms" element={<Listedefilms/>} />

  </Routes>
 
 </>
    
     ); 
    }
export default App;

 
  






