import React from 'react';
import img1 from '../../assets/projects/image_1.jpg'
import img2 from '../../assets/projects/image_2.jpg'
import img3 from '../../assets/projects/image_3.jpg'
import './Styles/blogs.scss';

const Blogs = () =>{
    return(
        <div id= 'blogs'  className='sect'>
            <div className='container'>
                <h2 className='heading-section'>Our Blog</h2>
                <p className='slogan'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <div className='row'>
                    <div className='col-1'>
                        <div className='image'>
                            <a><img src={img1}></img></a>
                        </div>
                        <div className='desc'>
                            <a herf='#' className='title'>
                                <h3>Why Lead Generation is Key for Business Growth</h3>
                            </a>
                            <a herf='#' className='info'>
                                <div>
                                    <span>Sept. 12, 2019</span>
                                    <span>Admin</span>
                                    <span className='comment'>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>
                                        3</span>
                                </div>
                            </a>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                    <div className='col-1'>
                        <div className='image'>
                            <a><img src={img2}></img></a>
                        </div>
                        <div className='desc'>
                            <a herf='#' className='title'>
                                <h3>Why Lead Generation is Key for Business Growth</h3>
                            </a>
                            <a herf='#' className='info'>
                                <div>
                                    <span>Sept. 12, 2019</span>
                                    <span>Admin</span>
                                    <span className='comment'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>
                                        3</span>
                                        
                                </div>
                            </a>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                    <div className='col-1'>
                        <div className='image'>
                            <a><img src={img3}></img></a>
                        </div>
                        <div className='desc'>
                            <a herf='#' className='title'>
                                <h3>Why Lead Generation is Key for Business Growth</h3>
                            </a>
                            <a herf='#' className='info'>
                                <div>
                                    <span>Sept. 12, 2019</span>
                                    <span>Admin</span>
                                    <span className='comment'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>
                                        
                                         3</span>
                                </div>
                            </a>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Blogs;