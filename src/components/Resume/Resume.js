import React from 'react';
import './styles/resume.scss';

const Resume = () => {
    return (
        <div id='resume' className='section-resume'>
            <div className='container'>
                <div className='resume-wapper'>
                    <div classaName='resume-left'>
                        <div id='tab' className=''>
                            <ul>
                                <li>
                                    <a herf="#education">Education</a>
                                </li>
                                <li>
                                    <a herf='#experience'>Experience</a>
                                </li>
                                <li>
                                    <a herf='#skills'>Skills</a>
                                </li>
                                <li>
                                    <a herf='#awards'>Awards</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='resume-right'>
                        <div id='education' className='page'>
                            <h2 className='resume-heading'>Education</h2>
                            <div className='education-wapper'>  
                                <div className='card'>
                                    <div className='icon'></div>
                                    <div className='content'>
                                        <h4 className='date'>2014-2015</h4>
                                        <h2 className='heading'>Bachelor of Science in Computer Science</h2>
                                        <h3 className='title'>Cambridge University</h3>
                                        <p className='desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='icon'></div>
                                    <div className='content'>
                                        <h4 className='date'>2014-2015</h4>
                                        <h2 className='heading'>Bachelor of Science in Computer Science</h2>
                                        <h3 className='title'>Cambridge University</h3>
                                        <p className='desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='icon'></div>
                                    <div className='content'>
                                        <h4 className='date'>2014-2015</h4>
                                        <h2 className='heading'>Bachelor of Science in Computer Science</h2>
                                        <h3 className='title'>Cambridge University</h3>
                                        <p className='desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='icon'></div>
                                    <div className='content'>
                                        <h4 className='date'>2014-2015</h4>
                                        <h2 className='heading'>Bachelor of Science in Computer Science</h2>
                                        <h3 className='title'>Cambridge University</h3>
                                        <p className='desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='experience' className='page'>
                        <h2 className='resume-heading'>Experience</h2>
                            <div className='experience-wapper'>  
                                <div className='card'>
                                    <div className='icon'></div>
                                    <div className='content'>
                                        <h4 className='date'>2014-2015</h4>
                                        <h2 className='heading'>Bachelor of Science in Computer Science</h2>
                                        <h3 className='title'>Cambridge University</h3>
                                        <p className='desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='icon'></div>
                                    <div className='content'>
                                        <h4 className='date'>2014-2015</h4>
                                        <h2 className='heading'>Bachelor of Science in Computer Science</h2>
                                        <h3 className='title'>Cambridge University</h3>
                                        <p className='desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='icon'></div>
                                    <div className='content'>
                                        <h4 className='date'>2014-2015</h4>
                                        <h2 className='heading'>Bachelor of Science in Computer Science</h2>
                                        <h3 className='title'>Cambridge University</h3>
                                        <p className='desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='icon'></div>
                                    <div className='content'>
                                        <h4 className='date'>2014-2015</h4>
                                        <h2 className='heading'>Bachelor of Science in Computer Science</h2>
                                        <h3 className='title'>Cambridge University</h3>
                                        <p className='desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='skills' className='page'>
                            <h2 className='resume-heading'>Skills</h2>
                            <div className='skills-wapper'>
                                <div className='skills-item'>
                                    <h2 className='title'>CSS</h2>
                                    <div className='pie-wapper'>
                                        <span className='label'>90</span>
                                        <div className='pie'></div>
                                    </div>
                                    <div className='desc'>
                                        <div className='desc-left'>
                                            <div className='number'>28%</div>
                                            <span className='date'>Last week</span>
                                        </div>
                                        <div className='desc-right'>
                                            <div className='number'>60%</div>
                                            <span className='date'>Last month</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='skills-item'>
                                    <h2 className='title'>HMTLK</h2>
                                    <div className='pie-wapper'>
                                        <span className='label'>80</span>
                                        <div className='pie'></div>
                                    </div>
                                    <div className='desc'>
                                        <div className='desc-left'>
                                            <div className='number'>28%</div>
                                            <span className='date'>Last week</span>
                                        </div>
                                        <div className='desc-right'>
                                            <div className='number'>60%</div>
                                            <span className='date'>Last month</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='skills-item'>
                                    <h2 className='title'>JQuery</h2>
                                    <div className='pie-wapper'>
                                        <span className='label'>75</span>
                                        <div className='pie'></div>
                                    </div>
                                    <div className='desc'>
                                        <div className='desc-left'>
                                            <div className='number'>28%</div>
                                            <span className='date'>Last week</span>
                                        </div>
                                        <div className='desc-right'>
                                            <div className='number'>60%</div>
                                            <span className='date'>Last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='others'>
                                <div className='skills-bar'>
                                    <h3 className='top'>
                                        <div className='title'>Photoshop</div>
                                        <div className='progress'>90%</div>
                                    </h3>
                                    <div className='bottom'>
                                        <div className='above'></div>
                                    </div>
                                </div>
                                <div className='skills-bar'>
                                    <h3 className='top'>
                                        <div className='title'>HTML5</div>
                                        <div className='progress'>95%</div>
                                    </h3>
                                    <div className='bottom'>
                                        <div className='above'></div>
                                    </div>
                                </div>
                                <div className='skills-bar'>
                                    <h3 className='top'>
                                        <div className='title'>WordPress</div>
                                        <div className='progress'>70%</div>
                                    </h3>
                                    <div className='bottom'>
                                        <div className='above'></div>
                                    </div>
                                </div>
                                <div className='skills-bar'>
                                    <h3 className='top'>
                                        <div className='title'>JQuery</div>
                                        <div className='progress'>85%</div>
                                    </h3>
                                    <div className='bottom'>
                                        <div className='above'></div>
                                    </div>
                                </div>
                                <div className='skills-bar'>
                                    <h3 className='top'>
                                        <div className='title'>CSS3</div>
                                        <div className='progress'>90%</div>
                                    </h3>
                                    <div className='bottom'>
                                        <div className='above'></div>
                                    </div>
                                </div>
                                <div className='skills-bar'>
                                    <h3 className='top'>
                                        <div className='title'>SEO</div>
                                        <div className='progress'>80%</div>
                                    </h3>
                                    <div className='bottom'>
                                        <div className='above'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='awards' className='page'>
                        <h2 className='resume-heading'>Awards</h2>
                            <div className='awards-wapper'>  
                                <div className='card'>
                                    <div className='icon'></div>
                                    <div className='content'>
                                        <h4 className='date'>2014-2015</h4>
                                        <h2 className='heading'>Bachelor of Science in Computer Science</h2>
                                        <h3 className='title'>Cambridge University</h3>
                                        <p className='desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='icon'></div>
                                    <div className='content'>
                                        <h4 className='date'>2014-2015</h4>
                                        <h2 className='heading'>Bachelor of Science in Computer Science</h2>
                                        <h3 className='title'>Cambridge University</h3>
                                        <p className='desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='icon'></div>
                                    <div className='content'>
                                        <h4 className='date'>2014-2015</h4>
                                        <h2 className='heading'>Bachelor of Science in Computer Science</h2>
                                        <h3 className='title'>Cambridge University</h3>
                                        <p className='desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='icon'></div>
                                    <div className='content'>
                                        <h4 className='date'>2014-2015</h4>
                                        <h2 className='heading'>Bachelor of Science in Computer Science</h2>
                                        <h3 className='title'>Cambridge University</h3>
                                        <p className='desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
           
        </div>
    )

}

export default Resume;
