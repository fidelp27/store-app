import React from "react"
import "./input.css"

const Input =({placeholder, type})=>{
  return(
    <div className="input-container">
      <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input
