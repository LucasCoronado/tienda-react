import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getArticuloData } from '../../assets/articulos'

const ItemDetailContainer = ({ greeting }) => {
    const [articulo, setArticulo] = useState({})
    const [cargando, setCargando] = useState(true)
    
    const getArticulo = async () => {
      try {
        const res = await getArticuloData
        setArticulo(res)
      } catch (error) {
        console.log(error)
      } finally {
        setCargando(false)
      }
    }
  
    useEffect(() => {
      getArticulo()
    }, [])
    
   return (
  
      <div >
        <h1>{greeting}</h1>
        {cargando ? <p>En breve se cargaran los productos</p> : <ItemDetail articulo={articulo}/>}
  
      </div>
  
    );
  };
  
export default ItemDetailContainer