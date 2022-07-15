import React, {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey } from '@mui/material/colors';
import { cartContext } from "../../Context/CartContext";
import "./cartWidget.css"

const CartWidget = () => {  

  const {cantidad} = useContext(cartContext)
  return (
    <div className="cartWidget">
    <ShoppingCartIcon fontSize="large" sx={{ color: grey[900] }}/>
    <h4>{cantidad}</h4>
    </div>
  );
};

export default CartWidget;
