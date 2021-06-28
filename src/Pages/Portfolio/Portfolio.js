//render each card for each project// use map
import React from 'react'
import ProjectData from '../../db/projects.js'
import ProjectCard from '../../components/ProjectCards'

function Portfolio(){
    return (
        <section>
        <article  className="portfolio-article" id="Portfolio">
            <div>
                <h3>Portfolio</h3>
            </div>
        </article>
        <aside className="article side">
            <ul>{
            ProjectData.map(project=>{
            
                return <ProjectCard 
                                key={project.id}
                                title= {project.title}
                                image= {project.image}
                                url= {project.url}
                                repo={project.repo}
                            ></ProjectCard>
            })
            }
            </ul>
        </aside>
        </section>
    )
}

export default Portfolio;
