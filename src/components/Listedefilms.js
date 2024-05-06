import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importer Link et useLocation depuis react-router-dom
import FilmCard from './FilmCard';
import allfilms from '../allfilms.json';
import '../App.css';

const ListeDeFilms = () => {
    const [filterCriteria, setFilterCriteria] = useState("");
    const [ratingCriteria, setRatingCriteria] = useState("");
    const location = useLocation(); // Utiliser useLocation pour obtenir l'URL actuelle

    return (
        <div className="film-list">
           
<div className="filter-inputs">
            <input
                type="text"
                placeholder="Rechercher par titre"
                value={filterCriteria}
                onChange={(e) => setFilterCriteria(e.target.value)}
            />
            <input
                type="text"
                placeholder="Filtrer par note"
                value={ratingCriteria}
                onChange={(e) => setRatingCriteria(e.target.value)}
            />
             </div>
             <div className="film-cards">
            {allfilms.filter(film => {
                const titleMatch = film.title.toLowerCase().includes(filterCriteria.toLowerCase());
                const ratingMatch = film.note.toString().includes(ratingCriteria);
                return titleMatch && ratingMatch;
            }).map((film, index) => (
                <FilmCard
                    key={index}
                    film={film}
                />
            ))}
        </div>
         {/* Utiliser une logique conditionnelle pour rendre le bouton uniquement si l'URL n'est pas la page principale */}
         {location.pathname !== "/" && (
                <button onClick={() => window.location.href = "/"}>Retour à la page principale</button>
            )}
           </div> 
    );
};

export default ListeDeFilms;
