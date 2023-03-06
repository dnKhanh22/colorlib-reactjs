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
                                    <span className='comment'></span>
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
                                    <span className='comment'></span>
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
                                    <span className='comment'></span>
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