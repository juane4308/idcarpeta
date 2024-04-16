import React from 'react'
import { useState,useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import getProducts from"../../data/getProducts"

const ItemDetailConteiner = () => {
    const [product,setProduct] = useState ({})

    const{idProduct}= useParams()

    useEffect(()=>{
        getProducts
        .then((respuesta)=>{
            const newProduct = respuesta.find((product)=> product.id === idProduct)
            setProduct(newProduct)
        })
        .catch((error)=> console.log(error))
    },[])

    return (
        <ItemDetail product={product}/>
    )
}

export default ItemDetailConteiner