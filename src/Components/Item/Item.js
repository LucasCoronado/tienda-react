import React from 'react'
import "../ItemCount/style.css"

const Item = ({ articulo }) => {
    const { img, nombre, descripcion } = articulo

    return (
        <div className='tarjetasProductos'>
            <div>
                <img src={img} alt="" />
                <h3>{nombre}</h3>
                <h2>{descripcion}</h2>
                <span className='btn'>
                    <button>-</button>
                    <button>Agregar al carrito</button>
                    <button>+</button>
                </span>
            </div>
        </div>
    )
}

export default Item