import React from 'react';
import CV from '../../assets/Resume/ResumeScreenshot.PNG';
import './resume.css'

function resume(){
    return(
        <section className='resume'>
            <h3>Download</h3>
            <a className="text-link" href="../../assets/Resume/Sergio_Torres_Resume_2.5.pdf" target="_blank" download>
            <img className="resume-shot" src={CV} alt='resume screenshot'></img>
            </a>
            <br/>
        </section>
    )
}

export default resume;