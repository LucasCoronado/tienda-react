import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Components/Cart/Cart.js'
import CustomProvider from "./Context/CartContext";
import CartForm from "./Components/CartForm/CartForm";

const App = () =>{
  const greeting= "Bienvenido/a a la Tienda"

  return (
    <BrowserRouter>
    <CustomProvider>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting={greeting}/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}/>}/>
      <Route path="/detail/:id" element={<ItemDetailContainer greeting={greeting}/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/cartForm" element={<CartForm/>}/>
    </Routes>
    </CustomProvider>
    </BrowserRouter>

  )
}

export default App