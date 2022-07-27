import React, { useContext } from 'react'
import { cartContext } from '../../Context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import "./cart.css"
import { Link } from "react-router-dom"



const Cart = () => {
  const { productos, clear, calcularTotal } = useContext(cartContext)

  if (productos.length === 0) {
    return (
      <>
      <h3>El carrito esta vacio</h3>
      <Link to={"/"}><button>Volver al inicio</button></Link>
      </>
    )
  }

  return (
    <div>
      {productos.map((producto) => <ItemCart key={producto.id} producto={producto} />)}
      <div className='cartBtn'>
      <p>TOTAL ${calcularTotal()}</p>
        <Link to={"/cartForm"}><button>Finalizar compra</button></Link>
        <button onClick={clear}>Limpiar Carrito</button></div>
    </div>
  )
}

export default Cart