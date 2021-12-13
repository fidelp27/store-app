import React, {useState, useEffect, useContext} from "react"
import {products} from "../item/items"
import ItemDetail from "../itemDetail/itemDetail"
import {useParams} from "react-router-dom"
import { CartContext } from '../../context/CartContext'

const ItemDetailContainer =()=>{

  const[item, setItem]= useState([])
  const{itemid}=useParams();
  const[isLoading, setIsLoading] = useState(true)
  const[irAlCarrito, setIrAlCarrito] = useState(false)
  const { addToCart } = useContext(CartContext)

  useEffect(()=>{
    setIsLoading(true)
    const getProduct = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(products)
      },2000)
    })

    getProduct.then((res)=>{
      itemid && setItem(res.find((item)=> item.id === itemid));

    })
    .catch((err)=>{
      console.log(err);
    })
    .finally(()=>{
      setIsLoading(false)
    })
  },[itemid])

  const onAdd = (cantidad) =>{
    addToCart(item, cantidad)
    setIrAlCarrito(true)
  }

  return(isLoading ?
    <div className="preloader-container">
      <img className="preloader" src="../assets/preloader2.gif" alt="gif"/>
    </div> :
    <div>
      <ItemDetail item={item} onAdd={onAdd} irAlCarrito={irAlCarrito} />
    </div>
  )
}

export default ItemDetailContainer
