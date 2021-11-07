import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/system";
import axios from "axios";
import cheerio from "cheerio";
import { Link } from "react-router-dom";
import "../css/cardProduct.css";

const CardProduct = ({ product }) => {

  return (
    <div className="card-product-container">
      <div className="image-container">
        <img src={ linkImage } alt="" />
      </div>
      <div>
        <p>{ product.description }</p>
        <div>
          <h4>{ (Number(product.price))
            .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</h4>
          <Button component={ Link } to={ product.link } variant="contained" target="_blank">
            ver na pagina
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardProduct;
