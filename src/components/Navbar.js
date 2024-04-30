import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        
            <nav className="nav">
           <Link to="/" className="nav-link"> Accueil</Link> 
           <Link to="/Homepage" className="nav-link"> HomePage</Link> 
           <Link to="/Listedefilms" className="nav-link"> Listedefilms </Link>  
          </nav>
        
    )
}
export default Navbar;