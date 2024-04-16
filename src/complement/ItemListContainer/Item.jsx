import React from "react"
import { Link } from "react-router-dom"

const Item = ({product}) => {
return (
<div key={product.id} className="card">
    <div className="image-box-card">
        <img className="image-card" src={product.imagen} alt={product.nombre} />
    </div>
    <div className="info-card">
        <h2 className="title-card">{product.nombre}</h2>
        <p className="description-card">{product.descripcion}</p>
        <div className="box-button-item">
            <Link to={"/detail/"+ product.id} className="button-item">
                ver detalles
            </Link>
        </div>
    </div>
</div>
)
}

export default Item