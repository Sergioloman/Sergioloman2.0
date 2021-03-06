import React from 'react';
import FooterData from '../../db/footers.js'


function footer(){
//we can map trough each one of the icons and items in the footer....
    return(
        <footer>
            <div>
                <br/>
                <h2 id="contact-info">
                    Find me online
                </h2>
                <br/>
                <p>Choose your favorite path:</p>
                <br/> 
            </div>
            <div>
                <ul className="footerBar">{
                    FooterData.map(footer=>{
                        
                        return <li key={footer.id}>
                                    <a target="_blank" rel="noreferrer" className="text-link" href={footer.url}>
                                    <img className="footer-icon" src={footer.image} alt={footer.alt}></img>
                                    </a>
                                </li>
                    })
                    }
                </ul>
            </div>
        </footer>
    )
}

export default footer;