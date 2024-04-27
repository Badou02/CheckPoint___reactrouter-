import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmCard from './components/FilmCard.js'
import Filtrer from './components/Filtrer.js'
import Listedefilms from './components/Listedefilms.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import allfilms from './allfilms.json'; // Chemin relatif depuis les fichiers de composants
import NewFilmForm from './components/NewFilmForm.js';
 import HomePage from './components/HomePage.js';
 import FilmDetailsPage from './components/FilmDetailsPage.js';
 import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  const [films, setFilms] = useState(allfilms);
  const [filteredFilms, setFilteredFilms] = useState(allfilms);

  const handleFilter = (filters) => {
    const { title, note } = filters;
    let filtered = allfilms;

    if (title) {
      filtered = filtered.filter(film => film.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (note) {
      filtered = filtered.filter(film => film.note >= parseFloat(note));
    }

    setFilteredFilms(filtered);
  };

  return (
    
    <div className="App">
       <Listedefilms films={filteredFilms} />
      <Filtrer onFilter={handleFilter} />
      <NewFilmForm />
      {<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/details/:id">
            <FilmDetailsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router> }
    </div>
  );
}
export default App;
