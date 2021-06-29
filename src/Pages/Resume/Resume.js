import React from 'react';
import CV from '../../assets/Resume/ResumeScreenshot.PNG';
import './resume.css'

function resume(){
    return(
        <section className='resume'>
            <h3>Download</h3>
            <a className="text-link" href="../../assets/Resume/Sergio Torres - _Resume_.pdf" download>
            <img className="resume-shot" src={CV} alt='resume screenshot'></img>
            </a>
            <br/>
        </section>
    )
}

export default resume;