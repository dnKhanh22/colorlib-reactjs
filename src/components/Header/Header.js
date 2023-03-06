
import React, { useState } from "react";
import './styles/header.scss'
import { Link } from "react-router-dom";


const Header = () => {
    const [active, setActive] = useState(true) 
    
    const handleShow = () => {
        setActive(!active)
    }

    return (
        // <div className="navbar">
        //     <div className="navbar-item">
        //         <h1 className="nav-brand">Ronaldo</h1>

        //         <ul className="nav-links">
        //             <Link to='/home'><li>Home</li></Link>
        //             <Link to='/about'><li>About</li></Link>
        //             <Link to='/resume'><li>Resume</li></Link>
        //             <Link to='/service'><li>Services</li></Link>
        //             <Link to='/project'><li>Projects</li></Link>
        //             <Link to='/blog'><li>My Blog</li></Link>
        //             <Link to='/contact'><li>Contact</li></Link>
                
        //         </ul>
        //     </div>
            
        // </div>
        <header id='header'>
            <div className="container">
                <div className="navbar">
                    <div  className="navbar-brand">
                        <h1>R<span>onaldo</span></h1>
                    </div>

                    <div id="nav-act" className="navbar-actions">
                        <ul>
                            <li className="navbar-item"><a href="#home">Home<div className="navbar-line"></div></a></li>
                            <li className="navbar-item"><a href="#about">About<div className="navbar-line"></div></a></li>
                            <li className="navbar-item"><a href="#resume">Resume<div className="navbar-line"></div></a></li>
                            <li className="navbar-item"><a href="#services">Services<div className="navbar-line"></div></a></li>
                            <li className="navbar-item"><a href="#projects">Projects<div className="navbar-line"></div></a></li>
                            <li className="navbar-item"><a href="#blogs">My Blog<div className="navbar-line"></div></a></li>
                            <li className="navbar-item"><a href="#contact">Contact<div className="navbar-line"></div></a></li>
                        
                        </ul>

                    </div>
                    <label className="navbar-icon" onClick={handleShow}>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">      
    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    </label>
                    {
                        active ? (
                            <div> </div>
                        ) : null
                    }
                    
                </div>

            </div>
        </header>
        
    )
}

export default Header
