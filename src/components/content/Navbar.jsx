import React from 'react';
import {Link} from 'react-router-dom';
import Dropdown from './Dropdown';
import Secciones from './Secciones';

const Navbar = () => {
    const listDrowdon = ["Mix de frutos secos", "Cereales", "Frutas"]
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <Secciones/>
              <Dropdown lista = {listDrowdon}/>
            </ul>
            </div>
            <ul className="nav-item">
            <Link className="nav-link active" to="/carrito">Carrito</Link>
            </ul>

            </div>
          </nav>
        </>
    );
}

export default Navbar;
