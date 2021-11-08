import React, { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";
import CardProduct from "./CardProduct";
import Loading from "./Loading";
import "../App.css"

const ListProducts = () => {
  const { products } = useContext(Context);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(products)
  }, [products])

  if (ListProducts.length === 0) <Loading />

  return (
    <div className="list-container">
      { (list.length) 
        ? list.map((product, i) => <CardProduct product={ product } key={ i } />)
        : <Loading />
      }
    </div>
  )
}

export default ListProducts;