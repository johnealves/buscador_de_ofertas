import React from "react";
import "../css/cardProduct.css";

const CardProduct = ({ product }) => {

  return (
    <div className="card-product-container">
      <div className="image-container">
        <img src={ product.image } alt="" />
      </div>
      <div>
        <p>{ product.description }</p>
        <div>
          <h4>{ (Number(product.price))
            .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</h4>
          <a href={ product.link } rel="noreferrer" target="_blank">
            ver na pagina
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardProduct;
