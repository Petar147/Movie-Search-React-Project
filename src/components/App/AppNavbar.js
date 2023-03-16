import React from "react";
import MovieLog from "../../assets/images/movie.svg";
import AppNavbarTabs from "./AppNavbarTabs";
import "./style.css"

const AppNavbar = () => {
  return (
    <div className="navbar">
      <img src={MovieLog} alt="MovieLog" className="app-navbar-img"  />
      <div className="navbar-tabs">
        <AppNavbarTabs />
      </div>
    </div>
  );
};

export default AppNavbar;
