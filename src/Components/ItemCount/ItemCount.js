import React, { useState } from 'react'
import "./style.css";

const ItemCount = ({ initial, onAdd, stock, img }) => {

    const [contador, setContador] = useState(initial);

    const clickSuma = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const clickResta = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    const clickAdd = () => {
        onAdd(contador);
    }

    return (
        <div className='tarjetasProductos'>
            <div>
                <img src= {img} alt="" />
                <h3>Hay disponibles {stock} unidades</h3>
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