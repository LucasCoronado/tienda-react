import React from 'react'
import './btnFinalizar.css'
import { Link } from 'react-router-dom';

const BtnFinalizar = () => {
  return (
    <div className='btnF'>
            <div >
                <h4>Estas solo a un paso</h4>
                <span>
                <Link to={"/Cart"}><button>Ir al carrito</button></Link>
                </span>
            </div>
        </div>
  )
}

export default BtnFinalizar