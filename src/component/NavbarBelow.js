import { useNavigate } from "react-router-dom";

import React from "react";

const NavbarBelow = () => {
  const navigate = useNavigate();

  const herosection = [
    {
      name: "ManuBar",
      path: "/menubar",
    },
    {
      name: "Product",
      path: "/product",
    },
    {
      name: "Service",
      path: "/service",
    },
    {
      name: "Sale",
      path: "/sale",
    },
    {
      name: "About",
      path: "/about",
    },
  ];
  const handleNavigate = (item) => {
    navigate(item.path);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "#222f3d",
        color: "white",
        height: "40px",
        // padding: "4px",
      }}
    >
      {herosection.map((item) => (
        <div onClick={() => handleNavigate(item)}>{item.name}</div>
      ))}
    </div>
  );
};

export default NavbarBelow;
