import React from "react"
import "./nav.css"

function Nav(){

  const categories = [
    {id:"1", address: '/', text: 'Nosotros'},
    {id:"2", address: '/category/Programacion', text: 'Programacion'},
    {id:"3", address: '/category/Gamer', text: 'Gamer'},
    {id:"4", address: '/category/Series', text: 'Series'},
    {id:"5", address: '/category/Peliculas', text: 'Peliculas'},
  ]

  return(
    <nav className="nav">
      {categories.map((item) => {
        return(
          <div className="link" key={item.id}>
            <a>{item.text}</a>
          </div>
        )
      })}
    </nav>
  )
}


export default Nav
