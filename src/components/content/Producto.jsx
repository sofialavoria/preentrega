import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DetalleProducto from './DetalleProducto';

const Producto = () => {
    const [producto, setProducto] = useState ([]);
    const {id} = useParams ()
    useEffect( () => {
        fetch('../json/productos.json')
        .then (response => response.json())
        .then (productos => {
            const producto1 = productos.find (productoArray => productoArray.id)
        setProducto(producto1)
        })
    },[])


    return (
        <>
        <div className="card mb-3" style={{maxWidth: '540px'}}>
           <DetalleProducto producto = {producto}/> 
        </div>
        </>
    );
}

export default Producto;
