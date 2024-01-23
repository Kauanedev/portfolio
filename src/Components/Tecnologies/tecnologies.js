import css from '../../Assets/css-icon.svg'
import git from '../../Assets/git-icon.svg'
import github from '../../Assets/github-icon2.svg'
import html from '../../Assets/html5-icon.svg'
import insomnia from '../../Assets/insomnia-icon.svg'
import js from '../../Assets/javascript-icon.svg'
import nodejs from '../../Assets/nodejs-icon.svg'
import npm from '../../Assets/npm-icon.svg'
import postgresql from '../../Assets/postgresql-icon.svg'
import python from '../../Assets/python-icon.svg'
import react from '../../Assets/react-icon.svg'
import typescript from '../../Assets/typeScript-icon.svg'
import './styles.css'

export default function Tecnologies() {
    return (
        <div id='tecnologies' className='container-tecnologies'>

            <span>⚙️Tecnologies</span>

            <div className='tecnologies'>
                <img src={react} alt="react" />
                <img src={nodejs} alt="nodejs" />
                <img src={js} alt="javascript" />
                <img src={typescript} alt="typescript" />
                <img src={css} alt="css 3" />
                <img src={html} alt="html 5" />
                <img src={python} alt="python" />
                <img src={git} alt="git" />
                <img src={github} alt="github" />
                <img src={insomnia} alt="insomnia" />
                <img src={postgresql} alt="postgresql" />
                <img src={npm} alt="npm" />
            </div>

        </div>
    )
}