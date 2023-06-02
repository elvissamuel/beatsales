import React, { useContext, useEffect, useState } from "react";
import Cart from "../Cart";
import { Link } from "react-router-dom";
import "./Checkout.scss";
import { CartContext } from "../CartContextProvider";
import Button from "../Button";
import Footer from "../Footer";

function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { cartItems, inputValue, removeFromCart, handleInput } =
    useContext(CartContext);

    const [modalCheckout, setModalCheckout] = useState(false);

    const handleModal = () =>{
      setModalCheckout(true)
    }

    const sumPrice = (count, obj) => {
      return count + obj.price;
    };
  const total = cartItems.reduce(sumPrice, 0);
  const grandTotal = total + 50 + 1.079;

  return (
    <div className={`Checkout ${modalCheckout ? 'active' : ''}`}>
      <Link className="goBack_btn">Go Back</Link>

      <div className="container">
        <form action="">
          <h2 className="checkoutHeader">CHECKOUT</h2>

          <div className="billingInfo">
            <div className="header">
              <h3 className="checkoutBilling">BILLING DETAILS</h3>

              <div class="inputNameEmail">
                <div class="inputName">
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder="Enter Name" />
                </div>
                <div class="inputEmail">
                  <label htmlFor="">Email Address</label>
                  <input type="text" placeholder="Enter Email" />
                </div>
              </div>

              <div class="inputNumber">
                <label htmlFor="">Phone Number</label>
                <input type="text" placeholder="Enter Number" />
              </div>
            </div>
          </div>

          <div className="shppingInfo">
            <div className="header">
              <h3>SHIPPING INFO</h3>
            </div>
            <div class="inputAddress">
              <label htmlFor="">Your Address</label>
              <input type="text" placeholder="Enter Address" />
            </div>

            <div class="zipCity">
              <div class="inputZip">
                <label htmlFor="">Zip Code</label>
                <input type="text" placeholder="Enter Zip Code" />
              </div>
              <div class="inputCity">
                <label htmlFor="">City</label>
                <input type="text" placeholder="Enter City" />
              </div>
            </div>

            <div class="inputCountry">
              <label htmlFor="">Country</label>
              <input type="text" placeholder="Enter Country" />
            </div>
          </div>

          <div className="paymentDetails">
            <div className="header">
              <h3>Payment Details</h3>
            </div>

            <div className="paymentBody">
              <h4 className="paymentHeader">Payment Method</h4>
              <div className="paymentMethod">
                <div className="radiobtn">
                  <input type="radio" name="payment" id="radio1" value="emoney" />
                  <label for="radio1">e-money</label>
                </div>
                <div className="radiobtn">
                  <input type="radio" name="payment" id="radio2" value="cash" />
                  <label htmlFor="radio2">Cash-on-delivery</label>
                </div>
              </div>
            </div>

            <div className="eMoneyContainer">
              <div className="emoney">
                <label htmlFor="">e-Money Number</label>
                <input type="text" placeholder="Number" />
              </div>
              <div className="emoney">
                <label htmlFor="">e-Money Pin</label>
                <input type="text" placeholder="Pin" />
              </div>
            </div>
          </div>
        </form>

        <div className="summary">


          <table>
            <tr className="cartHeader">
              <th>SUMMARY</th>
              <th></th>
            </tr>
            
           
            

            {cartItems.map((product)=>{
              const myId = product.id;
              const newProductName = product.name.split(" ");
              const productSubName = newProductName[0];

              return(
                <tr className="cartProduct">
                  <td className="productDetails">
                    <div className="productImg">
                      <img src={product.image.mobile} alt="" />
                    </div>
                    <div className="productDesc">
                      <span className="pname">{productSubName}</span>
                      <span className="pprice">${product.price}</span>
                    </div>
                  </td>
                  <td className="inputBox">
                    <span className="right">x{product.quantity}</span>
                  </td>
                </tr>
              )
              
            })}
            <tr>
              <td>
                <span>Total</span>
              </td>
              <td>
                <span className="right">
                  <b>${total}</b>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Shipping</span>
              </td>
              <td>
                <span className="right">
                  <b>$50</b>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>VAT (Included)</span>
              </td>
              <td>
                <span className="right">
                  <b>$1.079</b>
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <span>Grand Total</span>
              </td>
              <td>
                <span className="right">
                  <b>${grandTotal}</b>
                </span>
              </td>
            </tr>
        
          </table>

          <Button name="CONTINUE & PAY" style="primaryButton" onclick={handleModal} />

        </div>
      </div>

      <div className={`checkoutModal ${modalCheckout ? 'active' : ''}`}>
        <div className="modalContainer">
          <i class="far fa-check-circle"></i>

          <h3>THANK YOU <br /> FOR YOUR ORDER</h3>
          <span>You will recieve an email confirmation shortly</span>

          <div className="orderBody">
            <div className="modalProduct">
              <table>
                <tr>
                  <td className="modalItem">
                    <div className="productImg">
                      <img src={cartItems[0].image.mobile} alt="" />
                    </div>
                    <div className="productDesc">
                      <span className="pname">{cartItems[0].name}</span>
                      <span className="pprice">${cartItems[0].price}</span>
                    </div>
                  </td>
                  <td className="inputBox">
                      <span className="right">x{cartItems[0].quantity}</span>
                  </td>
                </tr>
                <span className="others">and {cartItems.length - 1} other item(s)</span>
              </table>
            </div>
            <div className="grandTotal">
              <h4>GRAND TOTAL</h4>
              <h5>${grandTotal}</h5>
            </div>
          </div>

      <Link to='/'><Button name="BACK TO HOME" style="primaryButton" /></Link>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Checkout;
