import React from 'react'
import Item from '../Item/Item'
import './style.css'

const ItemList = ({ listaArticulos }) => {

    return (
        <div>
            <div>Lista de articulos</div>
            <div className='tarjetas'>
                {listaArticulos.map((articulo) => <Item key={articulo.id} articulo={articulo} />)}
            </div>    
        </div>
    )
}

export default ItemList