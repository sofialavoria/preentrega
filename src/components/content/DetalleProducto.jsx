import React from 'react';


const DetalleProducto = ({producto}) => {
    return (
        <>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src= {`../img/${producto.img}`}className="img-fluid rounded-start"alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">{producto.precio}</p>
                        <p className="card-text">{producto.stock}</p>
                        <button className="btn btn-primary">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetalleProducto;
