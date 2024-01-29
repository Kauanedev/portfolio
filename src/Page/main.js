import github from '../Assets/github-icon.svg';
import linkedIn from '../Assets/linkedin-icon.svg';
import profile from '../Assets/profile.png';
import About from '../Components/About/about';
import Contact from '../Components/Contact/contact';
import Footer from '../Components/Footer/footer';
import Header from '../Components/Header/header';
import Journey from '../Components/Journey/journey';
import Projects from '../Components/Projects/projects';
import Tecnologies from '../Components/Tecnologies/tecnologies';
import './style.css';

function Main() {

  return (
    <>

      <div className="main">
        {/* <Header /> */}
        <div className='container-home' id='home'>
          <img src={profile}
            alt="profile"
            className="profile"
          />

          <div className='greetings'>
            <span>👋Hello, World!</span>
            <h1>Kauane Santos</h1>
            <h2>~ FullStack Developer ~</h2>

            <address className='social'>
              <a href='https://www.linkedin.com/in/kauane-santos-dev/'
                target='_blank' rel="noreferrer"
              >
                <img src={linkedIn}
                  alt='LinkedIn'
                  className='linkedin'
                />
              </a>

              <a href='https://github.com/Kauanedev'
                target='_blank' rel='noreferrer'
              >
                <img src={github}
                  alt='Github'
                  className='github'
                />
              </a>
            </address>
          </div>


        </div>

        <About />
        <Projects />
        <Journey />
        <Tecnologies />
        <Contact />
        <Footer />
      </div >

    </>
  );
}

export default Main;
