import React from 'react';
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
            <form className="d-flex">
                <input className="form-control me-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
            </div>
          </nav>
        </>
    );
}

export default Navbar;
