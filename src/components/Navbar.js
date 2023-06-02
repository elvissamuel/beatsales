import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import audiophile from "./assets/audiophile2.svg";
import "./Navbar.scss";
import Cart from "./Cart";
import { CartContext } from "./CartContextProvider";

function Navbar() {
  const [click, setClick] = useState(false);

  const{cartClick, handleCartClick, closeCart, cartItems} = useContext(CartContext)

  const handleClick = () => {
    setClick(!click);
  };
  

  const closeMenu = () => {
    setClick(false);
  };
 
  return (
    <div className={`NavSection ${cartClick && 'blur'} ${click && 'blur'}`} >
      <div className="navContainer" >
        <div className="navIcon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <Link to="/">
          <img src={audiophile} alt="audiophile-logo" />
        </Link>

        <div className={click ? "menu" : "menu_close"}>
          <Link to="/" className="menu-link" onClick={closeMenu}>
            HOME
          </Link>
          <Link to="/headphones" className="menu-link" onClick={closeMenu}>
            HEADPHONES
          </Link>
          <Link to="/speakers" className="menu-link" onClick={closeMenu}>
            SPEAKERS
          </Link>
          <Link to="/earphones" className="menu-link" onClick={closeMenu}>
            EARPHONES
          </Link>
        </div>

        <div className="menuBig">
        <Link to="/" className="menu-link">
            HOME
          </Link>
          <Link to="/headphones" className="menu-link">
            HEADPHONES
          </Link>
          <Link to="/speakers" className="menu-link">
            SPEAKERS
          </Link>
          <Link to="/earphones" className="menu-link">
            EARPHONES
          </Link>
        </div>

        <div className="cartBox">
          {cartItems.length >= 1 && <span className="itemNo">{cartItems.length}</span>}
          <i className="fas fa-cart-plus" onClick={handleCartClick} />
        </div>

      </div>
      <div className={cartClick ? "mayCartOpen" : "myCart"}>
        <Cart />
      </div>
    </div>
  );
}

export default Navbar;
