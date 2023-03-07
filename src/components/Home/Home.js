import React from "react";
import './styles/home.scss'


const Home = () => {
    return(
        
            <div  id="home" className="home-wapper">

                    <div className="container">
                        <div className="overlay"></div>
                        <div className="wapper">
                            <span className="subheading">hey! i'am</span>
                            <h1>Ronaldo Fredrickson</h1>
                            <h2>I'm a <span className="auto-typing">Front-end.</span></h2>
                            <div className='icon-arrow-down'>
                                <a href='#resume'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                </a>
                            </div>
                        </div>
                       
                 
                    </div>
            </div>
        
    )
}

export default Home;