import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./itemDetail.css";

const ItemDetail = ({articulo}) => {
    
    const onAdd = (contador) => {
        if (contador > 0) {
          console.log(`Se agregaron:  ${contador}`);
        }
        else {
            console.log('No se agrego nada al carrito');
        }
      }

  return (
    <div className='item'>
        <img src={articulo.img} alt={articulo.nombre} />
        <div>
            <h1>{articulo.nombre}</h1>
            <h2>${articulo.precio}</h2>
            <h3>{articulo.descripcion}</h3>
            <ItemCount stock={articulo.stock} initial={1} onAdd={onAdd}/>
        </div>
    </div>
  )
}

export default ItemDetail