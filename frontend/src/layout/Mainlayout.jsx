//Tanisha Kar
//CSE D1, Roll No - 23

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
