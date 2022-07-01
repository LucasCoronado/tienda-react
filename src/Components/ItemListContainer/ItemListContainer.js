import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getData } from '../../assets/articulos'

const ItemListContainer = ({ greeting }) => {
  const [listaArticulos, setListaArticulos] = useState([])
  const [cargando, setCargando] = useState(true)
  
  const getArticulos = async () => {
    try {
      const res = await getData
      setListaArticulos(res)
    } catch (error) {
      console.log(error)
    } finally {
      setCargando(false)
    }
  }

  useEffect(() => {
    getArticulos()
  }, [])


  return (

    <div >
      <h1>{greeting}</h1>
      {cargando ? <p>En breve se cargaran los productos</p> : <ItemList listaArticulos={listaArticulos} />}

    </div>

  );
};

export default ItemListContainer;
