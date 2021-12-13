import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
  const { cart, eliminar, totalCompra, deleteItem } = useContext(CartContext)

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.cantidad} {item.name} ${item.price}
          </p>
          <button onClick={() => deleteItem(item)}>Eliminar</button>
        </div>
      ))}
      {totalCompra > 0 ? (
        <>
          <p>total: {totalCompra}</p>
          <button onClick={eliminar}>Vaciar Carrito</button>
        </>
      ) : (
        <>
          <p>No agregaste nada todavía</p>
          <Link to="/">Productos</Link>
        </>
      )}
    </div>
  )
}

export default Cart
