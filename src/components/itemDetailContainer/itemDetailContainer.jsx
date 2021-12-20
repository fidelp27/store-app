import React, {useState, useEffect, useContext} from "react"
import ItemDetail from "../itemDetail/itemDetail"
import {useParams} from "react-router-dom"
import { CartContext } from '../../context/CartContext'
import { getFirestore, collection, getDocs,  query, where } from 'firebase/firestore'

const ItemDetailContainer =()=>{

  const[item, setItem]= useState([])
  const { itemid } = useParams()
  const[isLoading, setIsLoading] = useState(true)
  const[irAlCarrito, setIrAlCarrito] = useState(false)
  const { addToCart } = useContext(CartContext)

  useEffect(()=>{
    setIsLoading(true)
    const db = getFirestore()
    const ref = query(collection(db, 'products'), where("id","==", itemid))

    getDocs(ref)
      .then((snapshot) => {
        const itemFind = snapshot.docs.map((prod) => prod.data())
        setItem(itemFind[0])
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
