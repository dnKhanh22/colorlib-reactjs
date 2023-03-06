import React from 'react';
import './Styles/hireme.scss';
import hireimg from '../../assets/projects/Hire_me_bg.webp';

const Hireme =() =>{
    return(
        <div id='hireme' className='sect' style={{ backgroundImage:`url(${hireimg})` }}>
            
            <div className='overlay'></div>
            <div className='content'>
                <h2 className='heading'>I'm <span>Available</span> for freelancing</h2>
                <div className='slogan'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
                <div className='btn'>hire me</div>
            </div>
        </div>
    )
    
}

export default Hireme;

