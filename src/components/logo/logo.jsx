import React from "react"
import "./logo.css"
import {Link} from "react-router-dom"


const Logo = () =>{
  return(
      <div className="logo-container">
        <Link to="/"><p className="logo"><span>C</span>oding<span>W</span>ear</p></Link>
      </div>

  )
}

export default Logo;
