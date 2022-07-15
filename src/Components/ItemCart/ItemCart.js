import React, {useContext} from 'react'
import { cartContext } from '../../Context/CartContext'
import "./ItemCart.css"



const ItemCart = ({producto}) => {
    const {nombre, cantidad, id} = producto
    const {borrarProducto} = useContext(cartContext)

    const borrarP = () =>{
        borrarProducto(id)
    }
  return (
    <div className='itemCart'>
        <h2>{nombre}</h2>
        <h4>{cantidad}</h4>
        <button onClick={borrarP}>Borrar producto</button>
    </div>
  )
}

export default ItemCart