import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./itemDetail.css";
import BtnFinalizar from '../BtnFinalizar/BtnFinalizar';
import { cartContext } from '../../Context/CartContext';

const ItemDetail = ({ articulo }) => {

  const { agregarProducto } = useContext(cartContext)

  const [click, setClick] = useState(true)

  const onAdd = (contador) => {
    if (contador > 0) {
      console.log(`Se agregaron:  ${contador}`);
      agregarProducto({ ...articulo, cantidad: contador })
      setClick(click === false)
    }

  }

  return (
    <div className='item'>
      <img src={articulo.img} alt={articulo.nombre} />
      <div>
        <h1>{articulo.nombre}</h1>
        <h2>${articulo.precio}</h2>
        <h3>{articulo.descripcion}</h3>
        {click ? <ItemCount stock={articulo.stock} initial={1} onAdd={onAdd} /> : <BtnFinalizar />}
      </div>
    </div>

  )
}

export default ItemDetail