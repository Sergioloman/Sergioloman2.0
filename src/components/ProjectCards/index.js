//here we create a component for each one of our projects
import React from 'react';

function ProjectCard(props){
    return(
        <div>
            <a className="text-link" href={props.url}>{props.title}</a>    
            <img className="screenshot" src={props.image} alt={props.title}></img>
        </div>
    )
}

export default ProjectCard;