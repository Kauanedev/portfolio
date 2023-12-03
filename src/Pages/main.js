import './style.css';
import profile from '../Assets/profile.png'
import Header from '../Components/Header/header';


function Main() {
  return (
    <>
      <Header />

      <div className="conatiner-main">
        <img src={profile}
          alt="profile"
          className="profile"
        />

        <div className='title'>
          <span>👋Hello World!</span>
          <h1>Kauane Santos</h1>
          <h2>FullStack Developer</h2>
        </div>

      </div >

    </>
  );
}

export default Main;
