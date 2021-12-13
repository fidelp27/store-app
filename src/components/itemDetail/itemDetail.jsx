import React from "react"
import "./itemDetail.css"
import Counter from "../ItemCount/ItemCount"
import {Link} from "react-router-dom"

const ItemDetail = ({item, onAdd, irAlCarrito}) => {
  return (
    <div className="item-detail-container">
      <article className="card-detail">
        <div className="img-card-container">
          <img src={item.img} alt="img"/>
          <div className="info-stock">
            <p>Stock disponible: {item.stock}</p>
          </div>
        </div>
        <div className="info-container">
          <div className="info-title">
            <p>{item.name}</p>
          </div>
          <div className="info-price">
            <p>${item.price}</p>
          </div>
          <div className="description">
            <p>Remeras 100% Algodón, la mejor calidad del mercado. <strong>Tapacosturas</strong> en el cuello interno, combinados en todos nuestros diseños. <strong>Estampa</strong> La estampa textil es serigráfica de alta definición para lograr un efecto hiperrealista. <mark>No es sublimación, transfer, ni nada similar</mark>. Esos procesos son de baja calidad. Las <strong>Coding Remeras</strong> al ser estampas textiles, son de excelente calidad</p>
          </div>
          <div className="info-size">
            <p>link talles</p>
            <p>Medios de pago</p>
          </div>
          <div className="info-cuotas">
            <p>
              <img src="../assets/tdc.png" alt="tdc"/>
                3 cuotas sin interés de <span> ${parseFloat(item.price / 3).toFixed(2)}</span>
            </p>
            <p>
              <img src="../assets/tdc.png" alt="tdc"/>
                6 cuotas sin interés de <span> ${Math.round(item.price / 6).toFixed(2)}</span>
            </p>
          </div>
          {irAlCarrito ? (
            <div className="finish-shop">
                <Link to="/cart" className="finish">Terminar compra</Link>
            </div>
        ):(
            <div>
                <Counter stock={item.stock} onAdd={onAdd}/>
            </div>
        )}


        </div>

      </article>
    </div>
  )
}

export default ItemDetail
