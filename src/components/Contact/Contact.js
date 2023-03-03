import React from 'react';
import'./Styles/contact.scss';
import imga from '../../assets/projects/about.jpg';

const Contact = () =>{
    return(
        <div id='contact'>
            <div className='container'>
                <h2 className='heading-section'>Contact me</h2>
                <div className='slogan'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</div>
                <div className='contact-top-wrapper'>
                    <div className='contact-card'>
                        <div className='contact-card-wrapper'>
                            <div className='icon'></div>
                            <div className='title'>Address</div>
                            <div className='info'><span>198 West 21th Street, Suite 721 New York NY 10016</span></div>
                        </div>
                        <div className='contact-card-wrapper'>
                            <div className='icon'></div>
                            <div className='title'>Contact Number</div>
                            <div className='info'><a href=''>+ 1235 2355 98</a></div>
                        </div>
                        <div className='contact-card-wrapper'>
                            <div className='icon'></div>
                            <div className='title'>Email Address</div>
                            <div className='info'><a href=''>info@yoursite.com</a></div>
                        </div>
                        <div className='contact-card-wrapper'>
                            <div className='icon'></div>
                            <div className='title'>Website</div>
                            <div className='info'><a href=''>yoursite.com</a></div>
                        </div>
                    </div>
                </div>
                <div className='contact-form-wrapper'>
                    <div className='form-wrapper'>
                        <span><img  className='contact-image' src={imga}></img></span>
                        <form action='#'  className='contact-form'>
                            <div className='form-group'>
                                <input type='text' className='form-control' placeholder='Your name'></input>
                            </div>
                            <div className='form-group'>
                                <input type='text' className='form-control' placeholder='Your email'></input>
                            </div>
                            <div className='form-group'>
                                <input type='text' className='form-control' placeholder='Subject'></input>
                            </div>
                            <div className='form-group'>
                                <textarea cols='30' rows='7' className='form-control' placeholder='Message'></textarea>
                            </div>
                            <div className='form-group'>
                                <input type='submit' className='btn' value='Send message'></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contact;