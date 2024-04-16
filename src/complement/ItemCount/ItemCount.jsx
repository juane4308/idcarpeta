import React from 'react'
import { useState } from 'react'

const ItemCount = ( {addToCart}) => {
const [count,setcount] = useState (1)

const sumar = () => {
    setcount (count +1)
};
const restar = () => {
    if (count > 1) {
        setcount (count -1)
    }
    
};


return (
    <div>
        <div>
            <button onClick={restar}>-</button>
            <p>{count}</p>
            <button onClick={sumar}>+</button>
            <div>
                <button onClick={ () =>addToCart (count)}>Agregar al carrito</button>
            </div>
        </div>
</div>
  )
}

export default ItemCount