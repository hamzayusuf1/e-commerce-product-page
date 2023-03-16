import React, { useContext } from "react";

import { ShopContext } from "../../App";
import "./index.css";

const Hamburger = () => {
  const { openMenu, setOpenMenu, links } = useContext(ShopContext);

  console.log(openMenu);

  if (!openMenu) return null;
  return (
    <div
      className="overlay"
      onClick={() => {
        setOpenMenu(false);
      }}
    >
      <div
        className="side-menu"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          X
        </h1>

        {links.map((link) => (
          <p key={link}>{link}</p>
        ))}
      </div>
    </div>
  );
};

export default Hamburger;
