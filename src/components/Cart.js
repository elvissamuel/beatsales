import React, { useContext } from "react";
import Button from "./Button";
import { CartContext } from "./CartContextProvider";
import data from "../data.json";
import "./Cart.scss";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, inputValue, removeFromCart, handleInput, closeCart} =
    useContext(CartContext);

  console.log("cart:", cartItems);

  const sumPrice = (count, obj) => {
    return count + (obj.price * obj.quantity);
  };

  const total = cartItems.reduce(sumPrice, 0);

  return (
    <div className="Cart">
      <table>
        <tr className="cartHeader">
          <th>Cart({cartItems.length})</th>
          {/* <th>Remove All</th> */}
        </tr>
        {cartItems.map((product) => {
          console.log("productId: ", cartItems[2]);
          const myId = product.id;
          const newProductName = product.name.split(" ");
          const productSubName = newProductName[0];

          const itemTotalPrice = product.price * product.quantity; 

          // const price = product.price;

          return (
            <tr className="cartProduct">
              <td className="productDetails">
                <div className="productImg">
                  <img src={product.image.mobile} alt="" />
                </div>
                <div className="productDesc">
                  <span className="pname">{productSubName}</span>
                  <span className="pprice">${itemTotalPrice}</span>
                </div>
              </td>
              <td className="inputBox">
                <input type="text" value={product.quantity} />
              </td>
              <td className="close" onClick={() => removeFromCart(product.id)}>
                <i class="fas fa-window-close"></i>

              </td>
            </tr>
          );
        })}

        <tr>
          <td>
            <span>Total</span>
          </td>
          <td>
            <span>
              <b>${total}</b>
            </span>
          </td>
        </tr>
      </table>

      <Link to='/checkout'><Button name="CHECKOUT" style="primaryButton" onclick={closeCart} /></Link>
    </div>
  );
}

export default Cart;
