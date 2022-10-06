import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../styles/App.css';
import React from 'react';
import Navbar from '../content/Navbar';
import Contador from '../content/Contador';
import Home from '../content/Home';
import About from '../content/About';
import Contacto from '../content/Contacto';
import Producto from '../content/Producto';
import Carrito from '../content/Carrito';

const App = () => {
    return (
        <>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/"element={<Home/>}/>
              <Route path="/producto/:id"element={<Producto/>}/>
              <Route path="/about"element={<About/>}/>
              <Route path="/contacto"element={<Contacto/>}/>
              <Route path="/carrito"element={<Carrito/>}/>
            </Routes>
          </BrowserRouter>
        </>

    );
}

export default App;
