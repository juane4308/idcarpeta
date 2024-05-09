import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {

    const {cart, addToCart} = useContext(CartContext)
      const [clickAdd, setClickAdd] = useState(false)

  const handleClick = (count) => {
    const productCart = {...product, quantity: count, total: product.precio * count }
    addToCart(productCart)
    setClickAdd(true)
  }


  return (
    <div className="item-detail">
      <div className="info-detail">
            <h1 className="title">{product.nombre}</h1>
            <p className="price">precio: ${product.precio}</p>
            <p className="description">{product.fulldescripcion}</p>
      {
        clickAdd ? <Link to="/Cart" >ir al carrito</Link> :<ItemCount handleClick = {handleClick} stock = {product.stock} />
      }
      </div>
      <div className="image-detail">
      <img src={product.imagen} />
      </div>
    </div>
    )
}

export default ItemDetail