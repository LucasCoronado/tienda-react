import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getData } from '../../assets/articulos'
import {useParams}  from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [listaArticulos, setListaArticulos] = useState([])
  const [cargando, setCargando] = useState(true)
  
  const {categoryId} = useParams()
  

  useEffect(() => {
    setCargando(true)
    getData(categoryId)
    .then((res) => {
      setListaArticulos(res);
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
