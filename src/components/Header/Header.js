import React from "react";
import './styles/header.scss'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <div  className="navbar-brand">
                        <h1>Ronaldo</h1>
                    </div>

                    <div className="navbar-actions">
                        <ul>
                            <li className="navbar-item"><a href="#">Home<div className="navbar-line"></div></a></li>
                            <li className="navbar-item"><a href="#">About<div className="navbar-line"></div></a></li>
                            <li className="navbar-item"><a href="#">Resume<div className="navbar-line"></div></a></li>
                            <li className="navbar-item"><a href="#">Services<div className="navbar-line"></div></a></li>
                            <li className="navbar-item"><a href="#">Projects<div className="navbar-line"></div></a></li>
                            <li className="navbar-item"><a href="#">My Blog<div className="navbar-line"></div></a></li>
                            <li className="navbar-item"><a href="#">Contact<div className="navbar-line"></div></a></li>
                        
                        </ul>

                    </div>
                </div>

            </div>
        </header>
        
    )
}

export default Header