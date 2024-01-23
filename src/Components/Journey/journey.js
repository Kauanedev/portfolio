import journeyInfo from './journeyInfo';
import './style.css';


function Journey2() {
    return (
        <div className='container-journey'>
            <span id='journey'>🎓 My Journey</span>

            <div className='journey'>
                <>
                    {journeyInfo.map((info) => {
                        return (
                            <div key={info.id}>
                                <h2>{info.title}</h2>
                                <p>{info.description}</p>
                                <span>{info.date}</span>
                            </div>
                        )
                    })}
                </>

            </div>


        </div>

    );
}

export default Journey2;
