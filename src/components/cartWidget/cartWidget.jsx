import React from "react"
import "./cartWidget.css"
import {Link} from "react-router-dom"
import { CartContext } from '../../context/CartContext'
import {useContext} from "react"

function CartWidget(){
  const { itemQty } = useContext(CartContext)
  return(
    <Link to="/cart">
      <div className="cart-container">
        <img src="/assets/shopping-cart1.png" alt="shopping-cart"/>
          <div className="qty-item">
            {itemQty > 0 && (<p>{itemQty}</p>)}
          </div>
      </div>

    </Link>


  )
}
export default CartWidget
