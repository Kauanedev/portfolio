import './style.css';
import projectsInfo from './projectsInfo';
import dindin from '../../Assets/dindin-project.svg'
import academypay from '../../Assets/academypay-project.svg'
import player from '../../Assets/player-project.svg'

function Projects() {
    return (
        <div id='projects' className="container-projects">
            <span>🛠️Projects</span>

            <div className='projects'>
                <>
                    {projectsInfo.map((project) => {
                        return (
                            <a href={project.URL} target='_blank' rel="noreferrer" >
                                <div className='project-card' key={project.id}>
                                    <h3>{project.title}</h3>
                                    <img src={project.id === 1 ? dindin : project.id === 2 ? academypay : player} alt={project.title} />
                                    <p>{project.description}</p>
                                    <h5>{project.tecnologies}</h5>

                                </div>
                            </a>

                        );

                    })}
                </>
            </div>
        </div >
    );
}

export default Projects;
