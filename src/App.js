import './App.css';
import React from 'react';
import {Route,Routes} from "react-router-dom";
import Listedefilms from './components/Listedefilms.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage.js';
import FilmDetailsPage from './components/FilmDetailsPage.js';
import NewFilmForm from './components/NewFilmForm.js'



function App()  {
 
  return (
  <>

  <Routes>
    <Route path="/FilmDetailspage:id" element={< FilmDetailsPage/>}/> {/*  Cette ligne  veux dire que si on est sur la page FilmDetailsPage on affiche les elements de FilmDetailsPage */ }
     <Route path="/" element={< HomePage />} />{/* "" si on est sur la branche principale on affiche la page HomePage */}
     <Route path="/NewFilmForm" element={<NewFilmForm/>} /> {/*  Cette ligne  veux dire que si on est sur la page NewFilmForm on affiche les elements de NewFilmForm */ }
    <Route path="/Listedefilms" element={<Listedefilms/>} /> {/*  Cette ligne  veux dire que si on est sur la page Listedefilms on affiche les elements de Listedefilms */ }
 
  </Routes>
 
 </>
    
     ); 
    }
export default App;
