import './style.css';
import profile from '../Assets/profile.png'


function Main() {
  return (
    <div className="Main">
      <img src={profile}
        alt="profile"
        className="profile"
      />

    </div>
  );
}

export default Main;
