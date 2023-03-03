import React from 'react';
import './Styles/projects.scss';
import work1 from '../../assets/projects/work-1.jpg';
import work2 from '../../assets/projects/work-2.jpg';
import work3 from '../../assets/projects/work-3.jpg';
import work4 from '../../assets/projects/work-4.jpg';
import work5 from '../../assets/projects/work-5.jpg';
import work6 from '../../assets/projects/work-6.jpg';
const Projects = () =>{
    return(
        <div id='projects' className='section'>
           <h2 className='heading-section'>Projects</h2>
           <p className='slogan'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div className='projects-wrapper'>
                <div className='container'>
                    <div className='row1'>
                        <div className='card-project' style={{backgroundImage:`url(${work1})`}}>
                            {/* <a className='card-img'><img src={work1}/></a> */}
                        </div>
                        <div className='card-project'  style={{backgroundImage:`url(${work2})`}}>
                            {/* <a className='card-img'><img src={work2}/></a> */}
                        </div>
                        <div className='card-project'  style={{backgroundImage:`url(${work3})`}}>
                            {/* <a className='card-img' ><img src={work3}/></a> */}

                        </div>
                    </div>

                    <div className='row2'>
              
                        <div className='card-project' style={{backgroundImage:`url(${work4})`}}>
                            {/* <a className='card-img'><img src={work4}/></a> */}
                        </div>
                        <div className='card-project' style={{backgroundImage:`url(${work5})`}}>
                            {/* <a className='card-img'><img src={work5}/></a> */}
                        </div>
                        <div className='card-project' style={{backgroundImage:`url(${work6})`}}>
                            {/* <a className='card-img'><img src={work6}/></a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='projects-count'>
                <div className='container'>
                    <div className='projects-count-wrapper'>
                        <div className='count-item'>
                            <h3 className='number'>100</h3>
                            <p className='title'>Awards</p>
                        </div>
                        <div className='count-item'>
                            <h3 className='number'>1200</h3>
                            <p className='title'>Projects</p>
                        </div>
                        <div className='count-item'>
                            <h3 className='number'>1200</h3>
                            <p className='title'>Happy Customers</p>
                        </div>
                        <div className='count-item'>
                            <h3 className='number'>500</h3>
                            <p className='title'>Cup of coffee</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        
        </div>

    )
}

export default Projects;