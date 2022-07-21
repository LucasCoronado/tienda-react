import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import { doc, getDoc, collection } from 'firebase/firestore'


const ItemDetailContainer = ({ greeting }) => {
  const [articulo, setArticulo] = useState({})
  const [cargando, setCargando] = useState(true)

  const { id } = useParams()

  useEffect(() => {

    const productCollection = collection(db, 'productos');
    const refDoc = doc(productCollection, id)
    getDoc(refDoc)
      .then(result => {
        setArticulo({
          id: result.id,
          ...result.data(),
        })
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