import React from "react"
import "./cartWidget.css"
import {Link} from "react-router-dom"


function CartWidget(){
  return(
    <Link to="/cart">
      <div className="cart-container">
        <img src="/assets/shopping-cart1.png" alt="shopping-cart"/>
      </div>
    </Link>
  )
}
export default CartWidget
