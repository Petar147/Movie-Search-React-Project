import React from "react";
import AppNavbarTab from "./AppNavbarTab";

const AppNavbarTabs = () => {
    return (
        <div className="navbar-tab">
            <AppNavbarTab value="home"/>
            <AppNavbarTab value="about"/>
        </div>
    )
}


export default AppNavbarTabs;