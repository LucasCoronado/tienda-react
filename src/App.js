import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"

const App = () =>{
  const greeting= "Bienvenido/a a la Tienda"

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={greeting}/>
    </>

  )
}

export default App