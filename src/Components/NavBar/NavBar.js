import React from "react";
import logo from "../../assets/logo.png"
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom"

const categorias = [
    {
        id: 1,
        ruta: '/',
        tipo: 'Inicio'
    },
    {
        id: 2,
        ruta: 'category/remeras',
        tipo: 'Remeras'
    },
    {
        id: 3,
        ruta: 'category/pantalones',
        tipo: 'Pantalones'
    },
    {
        id: 4,
        ruta: 'category/camperas',
        tipo: 'Camperas'
    },

];

const NavBar = () => {
    return (
        <nav>
            <Link to={"/"} className="logo"><img src={logo} alt="logo"/></Link>
            <h1 className="navTitle">Tienda Online</h1>
            <div className="navItems">
                {categorias.map((c) => (
                    <Link to={c.ruta} key={c.id}>{c.tipo}</Link>
                ))}
            </div>
            <Link to={"/Cart"}><CartWidget/></Link>
        </nav >
    )
}

export default NavBar

