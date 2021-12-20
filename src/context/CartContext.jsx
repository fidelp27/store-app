import React, {useState, useEffect, useContext} from "react"
import {getDocs, collection, getFirestore, addDoc, doc, updateDoc} from "firebase/firestore"

export const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [totalCompra, setTotalCompra] = useState(0)
  const [itemQty, setItemQty] = useState(0)
  const [products, setProducts] = useState([])
  const [cartItem, setItemCart] = useState([])  
  const [isLoading, setIsLoading] = useState(true)
  const db = getFirestore()
  const ref = collection(db, "products")
  const refCart = collection(db, "itemCart")
  
  useEffect(()=>{
    getDocs(ref)
    .then((snapShot)=>{
      setProducts(snapShot.docs.map((doc)=>({ pid: doc.id, ...doc.data()})))
      // snapShot.docs.map((product)=> setProducts(prev => ([...prev, product.data()])))
      setIsLoading(false)
    })
  },[]) 
  

  const getCartItems = ()=>{
    getDocs(refCart)
    .then((snapShot)=>{
      setItemCart(snapShot.docs.map((doc)=>({  ...doc.data()})))
  })
 }

  const isOnCart = ()=>{
    return cart?.findIndex(item => item.id === products.id)
  }

  const addToCart = (item, cantidad, products) => {
    let total = 0    
    cart.map((p) => (total += parseInt(p.cantidad) * parseInt(p.price)))
    setItemQty(itemQty + cantidad)
    const isExistId = cart.findIndex((p) => p.id === item.id)
    if (isExistId === -1) {
      
      setCart([...cart, { ...item, cantidad }])
    } else {
      const oldQuantity = cart[isExistId].cantidad
      const newCart = cart.filter((p) => p.id !== item.id)
      setCart([...newCart, { ...item, cantidad: oldQuantity + cantidad }])
      
    }   

    total += item.price * cantidad
    
    setTotalCompra(total)
  }

  useEffect(() => {
    getCartItems()
  }, [])

  const deleteItem = (item) => {
    setCart(cart.filter((p) => p.id !== item.id))
    setTotalCompra(totalCompra - item.precio * item.cantidad)
    setItemQty(itemQty - item.cantidad)
  }
  const eliminar = () => {
    setCart([])
    setTotalCompra(0)
    setItemQty(0)
  }
  
  const data = {
    products, addToCart, cart, isLoading, deleteItem, isOnCart, cartItem
  }
  console.log(products);
  
  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  )
}
