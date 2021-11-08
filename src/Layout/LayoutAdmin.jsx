import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/sidebar";

const LayoutAdmin = ({ children }) => {
  return (
    <div>
      <nav>Este es el Navbar</nav>
      <Sidebar />
      <Outlet />
      <footer>este es el footer</footer>
    </div>
  );
};

export default LayoutAdmin;
