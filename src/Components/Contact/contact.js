import './style.css';
import email from '../../Assets/email-icon.svg'
import github from '../../Assets/github-icon3.svg'
import linkedin from '../../Assets/linkedin.svg'

export default function Contact() {
    return (
        <div className="container-contact">
            <h1 id='contacts'>📫 Contact me!</h1><br />
            <h2>You have a project and need help developing? Lets talk!</h2>
            <div className='contact'>

                <div className='email'>
                    <img src={email} alt='email' />
                    <a
                        href="mailto: kauanesantos.coding@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        id='email'
                    >
                        kauanesantos.coding@gmail.com
                    </a>
                </div>
                <div className='socials'>
                    <a
                        className='github'
                        href='https://github.com/Kauanedev'
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={github} alt='github' />
                        Kauanedev
                    </a>
                    <a
                        className='linkedin'
                        href='https://www.linkedin.com/in/kauane-santos-dev/'
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkedin} alt='linkedin' />
                        Kauane Santos
                    </a>
                </div>


            </div>

        </div >
    );
}

