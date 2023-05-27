import React from "react";
import { useContext } from "react";
import CartContext from "../context/cartContext";

import healthy_living_logo from "../healthy_living_logo.jpg";
export default function ProductItem(props) {
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  const { e } = props;
  return (
    <div className="col-md-4">
      <div className="card my-2">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{e.pValue} PV</span>
        </div>
        <img src={healthy_living_logo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{e.pDescription}</h5>

          {/* show the price in */}
          <div className=" d-flex justify-content-between align-items-center">
            <button className="card-text">{e.pCode}</button>
            <p className="h3 font-weight-bold">NPR. {e.pDpNpr}</p>
          </div>
          <p className="card-text">
            <small className="text-muted">{e.pCategory}</small>
          </p>
          <button className="btn btn-danger" onClick={()=>{addToCart(e)}}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
