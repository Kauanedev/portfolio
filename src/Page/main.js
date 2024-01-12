import github from '../Assets/github.svg';
import linkedIn from '../Assets/linkedin.svg';
import profile from '../Assets/profile.png';
import About from '../Components/About/about';
import Header from '../Components/Header/header';
import Journey from '../Components/Journey/journey';
import './style.css';

function Main() {

  return (
    <>
      <Header />

      <div className="main">
        <div className='container-home'>
          <img src={profile}
            alt="profile"
            className="profile"
          />

          <div className='greetings'>
            <span>👋Hello, World!</span>
            <h1>Kauane Santos</h1>
            <h2>~ Back-end Developer ~</h2>

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
        <Journey />

      </div >

    </>
  );
}

export default Main;
