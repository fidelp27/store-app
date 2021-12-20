import React from "react"
import "./header.css"
import Logo from "../logo/logo"
import CartWidget from "../cartWidget/cartWidget"
import Input from "../input/input"
import {useLogOut} from "../../context/ContextAuth"

function Header(){
  const logout = useLogOut()

  return(
    <div className="navbar">
      <Logo/>
      <Input type="text" placeholder="Ingresa tu búsqueda" />
      <CartWidget/>
      <button onClick={()=> logout()}>Logout</button>
    </div>
      
      
  )
}

export default Header
