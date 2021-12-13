import React from "react"
import "./nav.css"
import {Link} from "react-router-dom"

function Nav(){

  const categories = [
    {id:"1", address: '/nosotros', text: 'Nosotros'},
    {id:"2", address: '/category/Programacion', text: 'Programacion'},
    {id:"3", address: '/category/Gamer', text: 'Gamer'},
    {id:"4", address: '/category/Series', text: 'Series'},
    {id:"5", address: '/category/Peliculas', text: 'Peliculas'},
    {id:"6", address: '/contact', text: 'Contacto'},
  ]

  return(
    <nav className="nav">
      {categories.map((item) => {
        return(
          <div className="link" key={item.id}>
            <Link to={item.address}>{item.text}</Link>
          </div>
        )
      })}
    </nav>
  )
}


export default Nav
