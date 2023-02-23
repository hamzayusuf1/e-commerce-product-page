import React, { useState, createContext } from "react";

import "./App.css";
import Description from "./components/Description";
import Gallery from "./components/Gallery";
import NavLinks from "./components/NavLinks";

export const ShopContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <ShopContext.Provider value={{ count, setCount }}>
      <div className="app">
        <NavLinks />
        <div className="mainDiv">
          <Gallery />
          <Description />
        </div>
      </div>
    </ShopContext.Provider>
  );
}

export default App;
