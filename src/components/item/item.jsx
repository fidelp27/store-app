import React from "react"
import "./item.css"
import {Link} from "react-router-dom"

const Item = ( {item} )=>{
  return(
    <Link to={`/product/${item.id}`}>
    <div className="card-container">
      <div className="img-card">
        <img src={item.img} alt="producto"/>
      </div>
      <div className="info-card">
        <p>{item.name}</p>
        <p>Precio: ${item.price}</p>
      </div>
    </div>
  </Link>
  )
}
export default Item
