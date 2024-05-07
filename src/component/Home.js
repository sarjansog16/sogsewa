import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Facebook from "./facebook";

const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Facebook/>

    </div>
  );
};

export default Home;
