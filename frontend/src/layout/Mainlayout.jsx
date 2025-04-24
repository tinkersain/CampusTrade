//Tanisha Kar
//CSE D1, Roll No - 23

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import TopNavbar from "../components/TopNavbar";

const MainLayout = () => {
  return (
    <div className="main-container">
      <TopNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
