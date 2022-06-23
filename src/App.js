import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"

const App = () =>{
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Catalogo no disponible"/>
    </>

  )
}

export default App