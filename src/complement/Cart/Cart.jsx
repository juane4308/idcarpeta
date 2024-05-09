import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import db from '../../db/db'
import { Link } from 'react-router-dom'



const Cart = () => {
    const {cart, clearCart, deleteProductById, totalPrice} = useContext(CartContext);

//early return
if (cart.leng === 0){
    return <div>No hay productos en el carro</div>
}
return (
    <div >
        {
            cart.map((productDb) => (
                <div key={productDb.id}>
                    <p>{productDb.nombre}</p>
                    <p>Precio ${productDb.precio}</p>
                    <p>Cantidad {productDb.quantity}</p>
                    <p>total: {productDb.quantity * productDb.precio}</p>
                    <img src={productDb.imagen} style={{width:"50px",height:"50px"}} /> 


                
                <button onClick={() => deleteProductById(productDb.id)}>Eliminar Producto </button>
                </div>
            ))
        }

            <h2>Precio total de compra:{totalPrice()}</h2>
        <button onClick={clearCart}>Vaciar Carrito</button>
        <Link to="/CheckOut">Continuar compra</Link>

        
    </div>
)
}

export default Cart


