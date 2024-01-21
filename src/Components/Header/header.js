import './style.css';


function Header() {
    return (
        <div className="container-header">
            <div className='bar'>
                <a id="home" className='logo' href='https://github.com/Kauanedev' target='_blank' rel="noreferrer">
                    <h1>ks</h1>
                </a>

                <div className='references'>
                    <ul>
                        <a href="#home">Home</a>
                        <a href="#about">About me</a>
                        <a href='#journey'>Journey</a>
                        <a href='#projects'>Projects</a>
                        <a href='#tecnologies'>Tecnologies</a>
                    </ul>
                </div>

            </div>
        </div >
    );
}

export default Header;
