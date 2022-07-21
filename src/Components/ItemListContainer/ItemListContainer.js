import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import {useParams}  from 'react-router-dom'
import { db } from "../../firebase/firebase";
import {getDocs, collection, query, where} from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {
  const [listaArticulos, setListaArticulos] = useState([])
  const [cargando, setCargando] = useState(true)
  
  const {categoryId} = useParams()

  
  useEffect(() => {

    
    const q = categoryId
        ? query(collection(db, 'productos'), where('tipo', '==', categoryId))
        : collection(db, 'productos');

    getDocs(q)
    .then(result => {
      const lista = result.docs.map(product => {
        return {
          id: product.id,
          ...product.data()
        }
      })
      setListaArticulos(lista)
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() =>{
      setCargando(false)
    });
  }, [categoryId])


  return (

    <div >
      <h1>{greeting}</h1>
      {cargando ? <p>En breve se cargaran los productos</p> : <ItemList listaArticulos={listaArticulos} />}

    </div>

  );
};

export default ItemListContainer;
