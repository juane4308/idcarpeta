import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import "./itemListConteiner.css"
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../../db/db';


const ItemListContainer = () => {
  const [products, setProducts] = useState ([]);


  const{ idCategory} = useParams()

const getProducts = async() => {
  const dataDb = await getDocs(collection(db, "products"));

  const data = dataDb.docs.map((productDb) => { 
    return { id: productDb.id, ...productDb.data() }
}) 
    setProducts(data)
}

  const getProductsByCategory = async() => {
    const q = query(collection(db, "products"), where("category", "==", idCategory));

    const dataDb = await getDocs(q);

    const data = dataDb.docs.map((productDb) => { 
      return { id: productDb.id, ...productDb.data() }
  }) 
      setProducts(data)

  }

  useEffect (() =>{ 
  if(idCategory){
    getProductsByCategory()
  }else{
    getProducts()
  }
}, [idCategory] );

  return (
    <div className="item-list-container">
        <ItemList products ={products}  />
    </div>
  )
}

export default ItemListContainer