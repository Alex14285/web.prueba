import React from "react";
import reactLogo from "../images/react-logo.png";


export default function Navbar(){
    return(
        <nav>
            <img src={reactLogo} alt="react logo" className="react-logo"/>
            <h2 className="react-titulo">React portafolios</h2>
        </nav>
    )
}