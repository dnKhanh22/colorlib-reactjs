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
                            <li>
                                <a href='#home'>
                                {/* <i className='foot-icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> */}
    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                {/* <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></i> */}
                                    Home</a>
                                
                            </li>
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
                <p>Copyright ©2023  All rights reserved | This template is made with  by Colorlib</p>
                    
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    {/* <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg> */} 
                    
            </div>

        </footer>
    )
}

export default Footer;