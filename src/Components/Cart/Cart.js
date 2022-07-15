import React, {useContext} from 'react'
import { cartContext } from '../../Context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import "./cart.css"



const Cart = () => {
  const {productos, clear} = useContext(cartContext)
  return (
    <div>
      {productos.map((producto) => <ItemCart key={producto.id} producto={producto}/>)}
      <div className='cartBtn'>
        <button onClick={clear}>Limpiar Carrito</button></div>
    </div>
  )
}

export default Cart