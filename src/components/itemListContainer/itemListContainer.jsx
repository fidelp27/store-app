import React, {useState, useEffect} from "react"
import {products} from "../item/items"
import ItemList from "../item/itemList"
import "./itemListContainer.css"
import {useParams} from "react-router-dom"
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer=({saludo})=>{
  const[items, setItems] = useState([])
  const[isLoading, setIsLoading]= useState(true)
  const { catid } = useParams()



useEffect(()=>{
  setIsLoading(true )
  const db = getFirestore()
    const ref = catid ? query(collection(db, 'products'), where("category","==", catid))
    : collection(db, 'products')  

    getDocs(ref)
      .then((snapshot) => {
        const filteredItems = snapshot.docs.map((p) => p.data())
        return  setItems(filteredItems)
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(()=>{
    setIsLoading(false)
  })
},[catid])


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
