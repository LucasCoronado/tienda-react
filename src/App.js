import React from "react";
import NavBar from "./Components/NavBar/NavBar"
// import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

const App = () =>{
  const greeting= "Bienvenido/a a la Tienda"

  return (
    <>
    <NavBar/>
    {/* <ItemListContainer greeting={greeting}/> */}
    <ItemDetailContainer greeting={greeting}/>
    </>

  )
}

export default App