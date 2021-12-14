import React, {useState, useEffect} from "react"
import {products} from "../item/items"
import ItemList from "../item/itemList"
import "./itemListContainer.css"
import {useParams} from "react-router-dom"
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const ItemListContainer=({saludo})=>{
  const[items, setItems] = useState([])
  const[isLoading, setIsLoading]= useState(true)
  const { category } = useParams()



useEffect(()=>{
  setIsLoading(true )
  const db = getFirestore()
    const ref = collection(db, 'products')

    getDocs(ref)
      .then((snapshot) => {
        const filteredItems = snapshot.docs.map((p) => p.data())
        return category
          ? setItems(filteredItems.filter((p) => p.category === category))
          : setItems(filteredItems)
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(()=>{
    setIsLoading(false)
  })
},[category])


  return(isLoading ?
    <div className="preloader-container">
      <img className="preloader" src="../assets/preloader.gif" alt="gif"/>
    </div> :
    <div  className="main-container">
      <h1>{saludo}</h1>
      <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer
