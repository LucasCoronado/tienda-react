import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ listaArticulos }) => {

    return (
        <div>
            <div>Lista de articulos</div>
            <div>
                {listaArticulos.map((articulo) => <Item key={articulo.id} articulo={articulo} />)}
            </div>    
        </div>
    )
}

export default ItemList