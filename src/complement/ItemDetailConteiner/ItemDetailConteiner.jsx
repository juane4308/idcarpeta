import React from 'react'
import { useState,useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import db from '../../db/db';

const ItemDetailConteiner = () => {
    const [product,setProduct] = useState ({})

    const{idProduct}= useParams()

    const getProduct = async() => {
        const docRef = doc(db, "products", idProduct);
        const datatDb = await getDoc(docRef)

        const data = { id: datatDb.id, ...datatDb.data() }

        setProduct(data)
    }
    useEffect(()=>{
    getProduct()
    },[idProduct])

    return (
        <ItemDetail product={product}/>
    )
}

export default ItemDetailConteiner