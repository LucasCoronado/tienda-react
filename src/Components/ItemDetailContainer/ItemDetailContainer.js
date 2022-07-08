import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getArticuloData } from '../../assets/articulos'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = ({ greeting }) => {
  const [articulo, setArticulo] = useState({})
  const [cargando, setCargando] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    setCargando(true);
    getArticuloData(id)
      .then((res) => {
        setArticulo(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false)
      })
  }, [id])

  return (

    <div >
      <h1>{greeting}</h1>
      {cargando ? <p>En breve se cargaran los productos</p> : <ItemDetail articulo={articulo} />}

    </div>

  );
};

export default ItemDetailContainer