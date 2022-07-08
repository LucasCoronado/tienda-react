import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Components/Cart/Cart.js'

const App = () =>{
  const greeting= "Bienvenido/a a la Tienda"

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting={greeting}/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}/>}/>
      <Route path="/detail/:id" element={<ItemDetailContainer greeting={greeting}/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App