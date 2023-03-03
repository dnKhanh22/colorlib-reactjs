import React from 'react';
import'./Styles/footer.scss';

const Footer = () =>{
    return(
        <footer id='footer'>
            <div className='container'>
                <div className='footer-wrapper'>
                    <div className='foot-menu'>
                        <h4>About</h4>
                        <p>Subscribe to our Email alerts to receive early discount offers, and new products info.</p>
                        <div className='icon-footer'></div>
                    </div>
                    <div className='foot-menu'>
                        <h4>Links</h4>
                        <ul>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#services'>Services</a></li>
                            <li><a href='#projects'>Projects</a></li>
                            <li><a href='#contact'>Contact</a></li>

                        </ul>
                    </div>
                    <div className='foot-menu'>
                        <h4>Services</h4>
                        <ul>
                            <li><a href=''>Web Design</a></li>
                            <li><a href=''>Web Development</a></li>
                            <li><a href=''>Business Strategy</a></li>
                            <li><a href=''>Data Analysis</a></li>
                            <li><a href=''>Graphic Design</a></li>
                        </ul>
                    </div>
                    <div className='foot-menu'>
                        <h4>Have a Questions?</h4>
                        <ul>
                            <li><a href='#'>203 Fake St. Mountain View, San Francisco, California, USA</a></li>
                            <li><a href=''>+2 392 3929 210</a></li>
                            <li><a href=''>info@yourdomain.com</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className='sub-footer'>
                <p>Copyright ©2023  All rights reserved | This template is made with by Colorlib</p>
            </div>

        </footer>
    )
}

export default Footer;