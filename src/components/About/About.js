import React from "react";
import './styles/about.scss'
import imga from "../../assets/projects/about.jpg"

const About = () => {
    return(
        <about>

        <div id="about" className="section">
            <div className="container">
                <div className="about-wapper">
                    <div className="about-item-img">
                        <div>
                           <img src={imga}/>
                            
                        </div>
                    </div>
                    <div className="about-item-text">
                        <h2>About me</h2>
                            <h3 className="about-goals">A small river named Duden flows by their place and supplies it with the necessary regelialia.</h3>
                                <ul className="about-info">
                                    <li>
                                        <span>Name:</span>
                                        <span>Ronaldo Fredrickson</span>
                                    </li>
                                    <li>
                                        <span>Date of birth:</span>
                                        <span>November 28, 1989</span>
                                    </li>
                                    <li>
                                        <span>Address:</span>
                                        <span>San Francisco CA 97987 USA</span>
                                    </li>
                                    <li>
                                        <span>Zip code:</span>
                                        <span>1000</span>
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        <span>abd@gmail.com</span>
                                    </li>
                                    <li>
                                        <span>Phone:</span>
                                        <span>+1-2234-5678-9-0</span>
                                    </li>
                                </ul>
                        <div className="about-projects-count">
                            <span>120</span>"Project commplete"
                        </div>
                        <div className="btn-down">download</div>
                        </div>
                    </div>
            </div>
            <div className="partner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        </about>
    )

}
export default About;