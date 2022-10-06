import React, {useState, useEffect} from 'react';

const Home = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const consultarStock = async () => {
        const response = await fetch ('./json/productos.json')
        const productos = await response.json ()
        
        const cardProducto = productos.map (producto =>
            <div className="card" key={producto.id}style={{width: '18rem'}}>
                <img src= {`../img/${producto.img}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.precio}</p>
                    <p className="card-text">{producto.stock}</p>
                    <button className="btn btn-primary">Añadir al carrito</button>
                </div>
            </div>
        )
        return cardProducto
        }
    consultarStock().then(producto => setProductos(producto))        
    }, []);

    return (
        <div className="row">
            {productos}
        </div>
    );
}

export default Home;
