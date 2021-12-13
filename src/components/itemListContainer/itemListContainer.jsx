import React, {useState, useEffect} from "react"
import {products} from "../item/items"
import ItemList from "../item/itemList"
import "./itemListContainer.css"
import {useParams} from "react-router-dom"

const ItemListContainer=({saludo})=>{
  const[items, setItems] = useState([])
  const[isLoading, setIsLoading]= useState(true)
  const {catid} = useParams()


useEffect(()=>{
  setIsLoading(true)
  const getProducts = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(products)
    },2000)
  })

  getProducts
  .then((res)=>{
    catid
    ? setItems(res.filter((item)=>item.category === catid))
      : setItems(res);
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
