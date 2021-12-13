import React, {useState, useEffect} from "react"
import "./counter.css"

function Counter({stock, onAdd}) {

  const [number, setNumber] = useState(0)

  const addNumber = () => {
    setNumber(number + 1)
  }
  const subtractNumber = () => {
    setNumber(number - 1)
  }


  return (
    <div className="count-container">
      <div className="counter-container">
        <button onClick={subtractNumber} type="button" name="button" disabled={number === 0}>-</button>
        <p>{number}</p>
        <button onClick={addNumber} type="button" name="button" disabled={number>=stock}>+</button>
      </div>
      <div className="add-container">
        <button onClick={()=>onAdd(number)} type="button" name="button" disabled={number === 0}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default Counter
