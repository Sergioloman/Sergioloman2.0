import React from 'react';

function footer(){
//we can map trough each one of the icons and items in the footer....
    return(
        <footer>
            <div>
                <h2 id="contact-info">
                    Contact me
                </h2>
            </div>
            <div>
                <ul>
                    <li><a href="mailto:sergio.lo.torres@gmail.com">Sergio.lo.torres@gmail.com</a></li>
                    <li>512-204-3654</li>
                    <li><img className="footer-icon" src="/assets/icons/li3.png" alt="github"></img></li>
                    <li><img className="footer-icon" src="/assets/icons/gi3.png" alt="linkdin"></img></li>
                    <li><img className="footer-icon" src="/assets/icons/ig5.png" alt="instagram"></img></li>
                </ul>
            </div>
        </footer>
    )
}

export default footer;