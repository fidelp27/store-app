import React from "react"
import "./header.css"
import Logo from "../logo/logo"
import Nav from "../nav/nav"

function Header(){
  console.log("hola");
  return(
    <div className="navbar">
      <Logo/>
      <Nav/>
    </div>
  )
}

export default Header
