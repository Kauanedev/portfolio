import './style.css';
import copyright from '../../Assets/copyright-icon.svg'

export default function Footer() {
    return (
        <div className="container-footer">
            <div className='footer'>
                <h5> Copyright</h5>
                <img src={copyright} alt='copyright' />
                <h5> 2024 <a href='http://localhost:3000'>Kauane Santos</a> - All rights reserved</h5>
            </div>
        </div >
    );
}

