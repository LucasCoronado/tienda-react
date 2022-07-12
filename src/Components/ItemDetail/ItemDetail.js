import React, {useState, useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./itemDetail.css";
import BtnFinalizar from '../BtnFinalizar/BtnFinalizar';

const ItemDetail = ({articulo}) => {
    
    const [click, setClick] = useState(true)

    useEffect(() => {
      
      }, [click])
    
    const onAdd = (contador) => {
        if (contador > 0) {
          console.log(`Se agregaron:  ${contador}`);
          setClick(click === false)
         }
         
      }

  return (
    <div className='item'>
        <img src={articulo.img} alt={articulo.nombre} />
        <div>
            <h1>{articulo.nombre}</h1>
            <h2>${articulo.precio}</h2>
            <h3>{articulo.descripcion}</h3>
            { click ? <ItemCount stock={articulo.stock} initial={1} onAdd={onAdd}/> : <BtnFinalizar/>}
        </div>
    </div>
    
  )
}

export default ItemDetail