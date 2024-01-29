/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.css';


function Header() {
    return (
        <div className="container-header">
            <header>
                <a className='logo' href='https://kauane-santos.netlify.app/'>
                    <h1>ks</h1>
                </a>

                <div className='references'>
                    <ul>
                        <a href="#home">Home</a>
                        <a href="#about">About me</a>
                        <a href='#projects'>Projects</a>
                        <a href='#journey'>Journey</a>
                        <a href='#tecnologies'>Tecnologies</a>
                        <a href='#contacts'>Contacts</a>
                    </ul>
                </div>

            </header>
        </div >
    );
}

export default Header;
