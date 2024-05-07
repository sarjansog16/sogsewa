import { Link } from "react-router-dom";
import React from "react";
import NavbarBelow from "./NavbarBelow";

const Navbar = () => {
  const navbarLink = [
    // {
    //   name: "Home",
    //   path: "/",
    // },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "SignUp",
      path: "/Signup",
    },
  ];

  return (
    <div class="bg-gray-800 py-4  w-full  ">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "40px",
          background: "black",
          color: "white",
        }}
      >
        <div>
          <Link style={{ color: "white", textDecoration: "none" }}>Home</Link>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          {navbarLink.map((item) => (
            <div>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={item.path}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <NavbarBelow />
    </div>
  );
};

export default Navbar;
