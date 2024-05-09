import { createContext, useState } from "react";

//creamos un contexto de reac
const CartContext = createContext()

const CartProvide = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (newProduct) => {
        const condicion = isInCart(newProduct.id)
        if(condicion) {
            
            const productMod = cart.map((productCart) => {
            if(productCart.id === newProduct.id){
                return { ...productCart, quantity: productCart.quantity + newProduct.quantity}
            }else{
                return productCart
            }
            })
        setCart(productMod)
        }else{


            setCart([...cart, newProduct])
        }    
    }

    //funcion para detectar si un producto esta en mi carrito
    const isInCart = (productId) => {
        const condicion = cart.some((product) => product.id === productId)
        return condicion
    }

    const totalQuantity = () => {
        const quantity = cart.reduce ( (total, product) => total+ product.quantity, 0 )
        return quantity
    }
        const clearCart = () =>{
            setCart([])
        }
    const deleteProductById = (productId) => {
        const productFilter = cart.filter( (productCart) => productCart.id !== productId )
        setCart(productFilter)
    }

        const totalPrice = () => {
            const total = cart.reduce ( (total, product) => total+ ( product.quantity * product.precio), 0 )
            return total
        }


    return (
        <CartContext.Provider value={ {cart, addToCart, totalQuantity, clearCart, deleteProductById, totalPrice} } >
            {children}
        </CartContext.Provider>
    )

}
export { CartContext, CartProvide}