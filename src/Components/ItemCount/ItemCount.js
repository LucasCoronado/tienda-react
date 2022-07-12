import React, { useState } from 'react'
import "./style.css";

const ItemCount = ({ initial, onAdd, stock,}) => {

    const [contador, setContador] = useState(initial);

    const clickSuma = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const clickResta = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const clickAdd = () => {
        onAdd(contador);
    }

    return (
        <div className='tarjetasProductos'>
            <div>
                <h4>Hay disponibles {stock} unidades</h4>
                <h2>{contador}</h2>
                <span className='btn'>
                <button onClick={() => clickResta()}>-</button>
                <button onClick={() => clickAdd()}>Agregar al carrito</button>
                <button onClick={() => clickSuma()}>+</button>
                </span>
            </div>
        </div>
    );
}

export default ItemCount;