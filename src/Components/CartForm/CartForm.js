import React, { useState, useContext } from 'react'
import { db } from '../../firebase/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { cartContext } from '../../Context/CartContext'
import "./cartForm.css"

const CartForm = () => {

    const { productos, calcularTotal } = useContext(cartContext)

    const [idVenta, setIdVenta] = useState("")

    const finalizarCompra = () => {

        const datosComprador = { nombre, apellido, email }

        const ventasCollection = collection(db, 'ventas');

        addDoc(ventasCollection, {
            datosComprador,
            items: productos,
            date: serverTimestamp(),
            total: calcularTotal(),
        })
            .then((result) => {
                setIdVenta(result.id)
                alert(`Gracias ${nombre}, el identificador de tu compra es ${result.id}`)
            })
    }

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <label>Apellido</label>
                <input
                    type="text"
                    required
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                />

                <label>E-mail</label>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={finalizarCompra}>Enviar datos</button>
            </form>
        </>
    )
}

export default CartForm