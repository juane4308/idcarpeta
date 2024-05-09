import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import React from 'react'
import { BsCart4 } from "react-icons/bs";
import { Link } from 'react-router-dom';


const CartWidge = () => {

  const { totalQuantity } = useContext(CartContext)

   const quantity = totalQuantity ()
  return (
    <Link to="/Cart" className="cartwidge">
        <BsCart4  size={30}/>
        <p>{ quantity > 0 && quantity}</p>
    </Link>
  )
}

export default CartWidge