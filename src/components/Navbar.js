import { Link } from "react-router-dom";
import React, { useState } from 'react';
function Navbar() {
    

    return(
        
            <nav className="nav">
           <Link to="/" className="nav-link"> Accueil</Link>  
           <Link to="/Listedefilms" className="nav-link"> Listedefilms </Link>  
           <Link to="/NewFilmForm" className="nav-link"> ADD New film </Link>
          
          </nav>
        
    )
}
export default Navbar;
