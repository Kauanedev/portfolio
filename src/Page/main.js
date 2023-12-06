import './style.css';
import profile from '../Assets/profile.png'
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import linkedIn from '../Assets/linkedin.svg'
import github from '../Assets/github.svg'

function Main() {
  return (
    <>
      <Header />

      <div className="container-main">
        <div className='container-home'>
          <img src={profile}
            alt="profile"
            className="profile"
          />

          <div className='home'>
            <span id='home'>👋Hello World!</span>
            <h1>Kauane Santos</h1>
            <h2>~ FullStack Developer ~</h2>

            <address className='social'>
              <a href='https://www.linkedin.com/in/kauane-santos-dev/'
                target='_blank'
              >
                <img src={linkedIn}
                  alt='LinkedIn'
                  className='linkedin'
                />
              </a>

              <a href='https://github.com/Kauanedev'
                target='_blank'
              >
                <img src={github}
                  alt='Github'
                  className='github'
                />
              </a>
            </address>
          </div>
        </div>

        <div className='about'>
          <span id='about'>🧐About Me</span>

        </div>
      </div >

    </>
  );
}

export default Main;
