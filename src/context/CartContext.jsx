import React, {useState} from "react"

export const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [totalCompra, setTotalCompra] = useState(0)
  const [itemQty, setItemQty] = useState(0)

  const addToCart = (item, cantidad) => {
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


  return (
    <CartContext.Provider value={{ addToCart, cart, eliminar, totalCompra, deleteItem, itemQty }}>
      {children}
    </CartContext.Provider>
  )
}
