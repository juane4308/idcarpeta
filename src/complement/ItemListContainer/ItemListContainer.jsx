import getProducts from '../../data/getProducts'
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import "./itemListConteiner.css"


const ItemListContainer = () => {
  const [products, setProducts] = useState ([]);

  const{ idCategory} = useParams()

    useEffect (() =>{ 
      getProducts
      .then ((respuesta) => {
        if(idCategory){
          // aqui filtro 
            const productsFilter = respuesta.filter((produt)=> produt.category === idCategory)
            setProducts(productsFilter)
        }else{
          //devuelve sin filtrar
          setProducts (respuesta)
        }
      })
      .catch ((error) => console.log (error))
      .finally (() => console.log ("finalizar promesa")); 
    }, [idCategory] );

  return (
    <div className="item-list-container">
        <ItemList products ={products}  />
    </div>
  )
}

export default ItemListContainer