import React, { useState, createContext, useEffect } from "react";

import Description from "./components/Description";
import Gallery from "./components/Gallery";
import NavLinks from "./components/NavLinks";
import Screen from "./components/ScreenSize";
import "./App.css";
import Modal from "./components/Modal";
import { CartContextProvider } from "./contexts/CartContext";
import Cart from "./components/Cart";

export const ShopContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [width, setWidth] = useState(window.innerWidth);

  const [openModal, setOpenModal] = useState(false);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width]);

  return (
    <CartContextProvider>
      <ShopContext.Provider
        value={{
          count,
          setCount,
          currentIndex,
          setCurrentIndex,
          width,
          openModal,
          setOpenModal,
        }}
      >
        <div className="all">
          <Modal open={openModal} />

          <div className="app">
            <div className="nav">
              <NavLinks />
            </div>
            {/* <p>
          Width: <strong>{width}</strong>
        </p> */}

            <div className="mainDiv">
              <Gallery />
              <Description />
            </div>
          </div>
        </div>
      </ShopContext.Provider>
    </CartContextProvider>
  );
}

export default App;
