import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "../Home";
import Header from "../Header";
import MainSection from "../MainSection";
import Footer from "../Footer";
import Service from "../Service";
import Product from "../hero/Product";
import Sale from "../hero/Sale";
import About from "../hero/About";
import ManuBar from "../hero/ManuBar";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}>
        <Route path="header" element={<Header />} />

        <Route index element={<MainSection />} />

        <Route path="menubar" element={<ManuBar />} />
        <Route path="product" element={<Product />} />
        <Route path="service" element={<Service />} />
        <Route path="sale" element={<Sale />} />
        <Route path="About" element={<About />} />

        <Route path="footer" element={<Footer />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
);
