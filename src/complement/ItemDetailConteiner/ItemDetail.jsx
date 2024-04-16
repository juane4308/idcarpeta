import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div>
            <h1>{product.nombre}</h1>
            <img src={product.imagen} />
            <p>{product.precio}</p>
    </div>
    )
}

export default ItemDetail