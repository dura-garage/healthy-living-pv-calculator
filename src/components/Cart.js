import React, { useContext } from "react";
import CartContext from "../context/cartContext";

export default function Cart() {

    



  const cartContext = useContext(CartContext);
  const { cart, totalPValue, totalPrice, addToCart, removeFromCart } =
    cartContext;

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <h1>My Cart</h1>
      {/* Add another column to + and minus the quantity */}

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product Code</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>DP NPR</th>
            <th>PV</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.pCode}>
              <td>{item.pCode}</td>
              <td>{item.pDescription}</td>
              <td>{item.quantity}</td>
              <td>{item.pDpNpr}</td>
              <td>{item.pValue}</td>
              <td>
                <div className="d-flex">
                  <button className="btn btn-outline-primary mx-2" onClick={()=>{addToCart(item)}}>+</button>
                  <button className="btn btn-outline-primary mx-2" onClick={()=>{removeFromCart(item)}}>-</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex">
        <button className="btn btn-outline-primary mx-2">
          Total Cost: {totalPrice}
        </button>
        <button className="btn btn-outline-primary mx-2">
          Total PV: {Math.round(totalPValue * 100) / 100}
        </button>
      </div>
    </div>
  );
}
