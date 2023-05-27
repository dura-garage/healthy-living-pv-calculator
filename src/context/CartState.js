import React, { useState } from "react";
import CartContext from "./cartContext";

const CartState = (props) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPValue, setTotalPValue] = useState(0);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.pCode === item.pCode);
    if (itemInCart) {
      itemInCart.quantity++;
      setTotalPValue(totalPValue + product.pValue);
      setTotalPrice(totalPrice + product.pDpNpr);
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
      setTotalPValue(totalPValue + product.pValue);
      setTotalPrice(totalPrice + product.pDpNpr);
    }
    setCart(newCart);
  };

  const removeFromCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.pCode === item.pCode);
    if (itemInCart) {
      itemInCart.quantity--;
      setTotalPValue(totalPValue - product.pValue);
      setTotalPrice(totalPrice - product.pDpNpr);
    }
    if (itemInCart.quantity === 0) {
      newCart = newCart.filter((item) => item.pCode !== product.pCode);
    }
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPValue, totalPrice }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
