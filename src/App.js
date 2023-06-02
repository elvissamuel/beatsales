import "./App.scss";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Headphones from "./components/pages/Headphones";
import Speakers from "./components/pages/Speakers";
import Earphones from "./components/pages/Earphones";
import Headphone1 from "./components/Headphone1";
import Headphone3 from "./components/pages/Headphone3";
import Speaker1 from "./components/pages/Speaker1";
import Earphone1 from "./components/pages/Earphone1";
import Speaker2 from "./components/pages/Speaker2";
import data from "./data.json";
import { CartContext } from "./components/CartContextProvider";
import React, { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Checkout from "./components/pages/Checkout";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getDefaultCart = () => {
    let itemList = {};
    for (let i = 1; i < data.length + 1; i++) {
      itemList[i] = 0;
    }
    return itemList;
  };

  const [cartClick, setCartClick] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [inputValue, setInputValue] = useState(1);


  const handleCartClick = () => {
    setCartClick(!cartClick);
  };
  const closeCart = () => {
    setCartClick(false);
  };

  const handleInput = (e) => {
    // const myValue = parseInt(e.target.value);
    setInputValue(e.target.value);
  };

  // const addToCart = (itemId) => {
  //   setCartItems((prev) => ({
  //     ...prev,
  //     [itemId]: prev[itemId] + parseInt(inputValue),
  //   }));
  // };

  // const addToTCart = (obj, quantity) => {
  //   setCartItems((prev) => {
  //     const itemExist = prev.find((item) => item.id === obj.id);

  //     if(itemExist){
  //       return 
  //     }
  //   }[
  //     ...prev,
  //     {
  //       ...obj,
  //       quantity,
  //     },
  //   ]);
  // };

  const addToTCart = (obj, quantity) => {
    setCartItems((prev) => {
      // Check if the item with the same ID already exists in the cart
      const existingItem = prev.find((item) => item.id === obj.id);
  
      if (existingItem) {
        // If the item exists, update its quantity by adding the new quantity
        return prev.map((item) => {
          if (item.id === obj.id) {
            return { ...item, quantity: item.quantity + quantity };
          }
          return item;
        });
      } else {
        // If the item does not exist, add it to the cart
        return [
          ...prev,
          {
            ...obj,
            quantity,
          },
        ];
      }
    });
  };
  

  const removeFromCart = (item) => {
    setCartItems(() => cartItems.filter((p) => p.id !== item));
  };
  
  const contextValue = {
    cartItems,
    removeFromCart,
    inputValue,
    handleInput,
    addToTCart,
    cartClick,
    handleCartClick,
    closeCart,
  };

  return (
    <div className="App">
      <CartContext.Provider value={contextValue}>
        <HashRouter basename="/">
          <Navbar />
          {/* <Headphone1 /> */}
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/headphones" Component={Headphones} />
            <Route path="/speakers" Component={Speakers} />
            <Route path="/earphones" Component={Earphones} />
            <Route path="/headphone01" Component={Headphone1} />
            <Route path="/headphone3" Component={Headphone3} />
            <Route path="/speaker1" Component={Speaker1} />
            <Route path="/earphone1" Component={Earphone1} />
            <Route path="/speaker2" Component={Speaker2} />
            <Route path="/checkout" Component={Checkout} />
            {/* <Route path="/cart" Component={Cart} /> */}
            {data.map((item) => {
              return (
                <Route
                  key={item.id}
                  path={`/${item.id}`}
                  // render={() => <Headphone1 product={data} />}
                  element={<Headphone1 product={item} />}
                />
              );
            })}
          </Routes>
        </HashRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
