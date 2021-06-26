// Import 'useState' Hook from React
import React from 'react';

function nav() {
  return (
    <header> 
        <div id="title">
            <a href="/">
                <h1>Sergio Torres</h1>
            </a>
            <h2>Web developer at <span><a href="https://youtu.be/tZyQRXxzsFI">Once upon...</a></span></h2>
        </div>                  
        <nav>
            <ul>
                <li>
                    <a href="#About">About</a>
                </li>
                <li>
                    <a href="#Portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Media</a>
                </li>
                <li>
                    <a href="#contact-info">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default nav;
