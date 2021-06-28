//render each card for each project// use map
import React from 'react'
import Image from '../../assets/FullSizeR1.jpg'

function About(){
    return (
            <section className='hero'>
                <h2>Meet Sergio</h2>
                <img src={Image} alt="mural portrait"></img>
                <p>Sergio Torres is a Web Developer based in Austin, Texas; He spends most of his time plotting world domination while getting harased by three cute little cats.</p>
                <br/>
                <p>Lets keep it interesting.</p>
            </section>
    )
}

export default About;
