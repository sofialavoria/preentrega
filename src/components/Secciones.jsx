import React from 'react';

const Secciones = () => {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link active" href="#">Inicio
                <span className="visually-hidden">(current)</span>
                </a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Quiénes somos</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Contacto</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Carrito</a>
            </li>
        </>
    );
}

export default Secciones;
