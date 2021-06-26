//here we create a component for each one of our projects
import React from 'react';

function ProjectCard({url, title, image, repo}){
   
    return(
        <li>
            <a target="_blank" rel="noreferrer" className="text-link" href={url}>{title}</a>    
            <img className="screenshot" src={image} alt={title}></img>
            <a target="_blank" rel="noreferrer" className="repo-link" href={repo}>{repo}</a>
        </li>
    )
}

export default ProjectCard;