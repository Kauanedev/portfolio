import './style.css';
import projectsInfo from './projectsInfo';
import dindin from '../../Assets/dindin-project.svg'
import academypay from '../../Assets/academypay-project.svg'
import player from '../../Assets/player-project.svg'

function Projects() {
    return (
        <div className="container-projects">
            <span id='projects'>🛠️Projects</span>
            <div className='projects'>

                <>
                    {projectsInfo.map((project) => {
                        return (
                            <a href={project.URL} target='_blank' rel="noreferrer" >
                                <div className='project-card' key={project.id}>
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                    <img src={project.id === 1 ? dindin : project.id === 2 ? academypay : player} alt={project.title} />
                                    <h6>{project.tecnologies}</h6>
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
