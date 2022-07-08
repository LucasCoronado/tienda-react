import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

const Item = ({ articulo }) => {
    const { img, nombre, precio } = articulo

    return (
        <div className='tarjetasProductos'>
            <div>
                <img src={img} alt="" />
                <h3>{nombre}</h3>
                <h2>${precio}</h2>
                <span className='btn'>
                    <Link to={`/detail/${articulo.id}`}><button>Ver detalle</button></Link>
                </span>
            </div>
        </div>
    )
}

export default Item