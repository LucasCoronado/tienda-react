import React from "react";
import logo from "../../assets/logo.png"
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <img src={logo} alt="logo" />
            <h1 className="navTitle">Tienda Online</h1>
            <div className="navItems">
                <a href=".">Inicio</a>
                <a href=".">Productos</a>
                <a href=".">Contacto</a>
            </div>
            <CartWidget/>
        </nav >
    )
}

export default NavBar

