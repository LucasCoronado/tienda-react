import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey } from '@mui/material/colors';

const CartWidget = () => {
  return (
    <ShoppingCartIcon fontSize="large" sx={{ color: grey[900] }}/>
  );
};

export default CartWidget;
