import { Typewriter } from 'react-simple-typewriter';
import UrlForm from './urlForm';

function UrlShortner() {
    return (
        <div className='container'>
            <div className="row m-5 d-flex align-items-center justify-content-center text-center">
                <h1 style={{ color: 'blue' }}>
                    <Typewriter
                        words={['Start Shortening your url']}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
            </div>

            <div className="row m-5">
                <UrlForm />
            </div>
        </div>
    )
}

export default UrlShortner