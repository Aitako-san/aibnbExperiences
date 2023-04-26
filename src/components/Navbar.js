import React from "react";
import "./../style.css"

import AirbnbLogo from "./images/Airbnb-logo.png";


export default function Navbar() {
    return (
        <nav className="nav">
                <img className="nav-logo" src={AirbnbLogo} alt="aibnb logo"></img>         
        </nav>
    )
}
