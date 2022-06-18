import React from "react";
import logo from "../../assets/logo.png"
import "./NavBar.css"


const NavBar = () => {
    return (
        <nav>
            <img src={logo} alt="logo" />
            <h1 class="navTitle">Tienda Online</h1>
            <div class="navItems">
                <a href=".">Inicio</a>
                <a href=".">Productos</a>
                <a href=".">Contacto</a>
            </div>
            
        </nav >
    )
}

export default NavBar

