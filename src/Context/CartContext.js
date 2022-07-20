import React, { createContext, useState, useEffect} from 'react'

export const cartContext = createContext();
const { Provider } = cartContext;

const CustomProvider = ({children}) => {

  const [productos, setProductos] = useState([]);
  const [cantidad, setCantidad] = useState([0])

useEffect(() => {
  cantidadProducto()
  
},[productos])
  
  const agregarProducto = (producto) => {
    if (enCarrito(producto.id)) {
      const found = productos.find(product => product.id === producto.id)
      const index = productos.indexOf(found)
      const productosX = [...productos]
      productosX[index].cantidad += producto.cantidad
      setProductos(productosX)
    } else {
      setProductos([...productos, producto])
    }
  }

  const borrarProducto = (id) => {
    const productoFilter = productos.filter(product => product.id !== id)
    setProductos(productoFilter);
    setCantidad()
  };

  const enCarrito = (id) => {
    const found = productos.find(producto => producto.id === id)
    return found ? true : false
  };

  const clear = () => {
      setProductos([]);
      setCantidad(0)
  }

  const cantidadProducto = () => {
    let cantidadP = 0
    productos.forEach(producto => cantidadP += producto.cantidad) 
    setCantidad(cantidadP)
  }

  const calcularTotal = () =>{
    let count = 0
    productos.forEach((prod)=>{
    count += prod.cantidad * prod.precio
    })
    return count
    }

  return (
    <Provider value={{ productos, agregarProducto, borrarProducto, clear, cantidad, calcularTotal} }>
        {children}
    </Provider>
  )
}

export default CustomProvider