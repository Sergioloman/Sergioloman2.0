//render each card for each project// use map
import React from 'react'
import ProjectData from '../../projects.json'
import ProjectCard from '../../components/ProjectCards'

function Portfolio(){
    return (
        <section>
        <article  class="portfolio-article" id="Portfolio">
            <div>
                <h3>Portfolio</h3>
            </div>
        </article>
        <aside class="article side">
            <ul>{
            ProjectData.map(project=>{
                console.log(project)
                return <li><ProjectCard 
                                id={project.id}
                                title= {project.title}
                                image= {project.image}
                                url= {project.url}
                                repo={project.repo}
                            ></ProjectCard></li>
            })
            }
            </ul>
        </aside>
        </section>
    )
}

export default Portfolio;
