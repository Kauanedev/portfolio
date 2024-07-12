import './style.css';
import projectsInfo from './projectsInfo';
import dindin from '../../Assets/dindin-project.svg'
import academypay from '../../Assets/academypay-project.svg'
import marcaJa from '../../Assets/swagger-marcaJa.png'
import generator from '../../Assets/password-generator.png'
import contruction from '../../Assets/under-contruction.svg'
import calculator from '../../Assets/calculator.png'

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
                                    <img src={project.id === 1 ? dindin : project.id === 2 ? academypay : project.id === 3 ? calculator : project.id === 5 ? generator : project.id === 6 ? marcaJa : contruction} alt={project.title} />
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
