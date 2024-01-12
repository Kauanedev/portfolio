import './style.css';


function Header() {
    return (
        <div className="conatiner-header">
            <div className='bar'>
                <a href="home" className='logo'>
                    <span>ks</span>
                </a>

                <div className='references'>
                    <ul>
                        <a href="#home">Home</a>
                        <a href="#about">About me</a>
                        <a href='#journey'>Journey</a>
                        <a>Home</a>
                    </ul>
                </div>

            </div>
        </div >
    );
}

export default Header;
