import '../src/pages.css'
import {Link} from 'react-router-dom';
import backButton from '/back-button.png'
import typingPage from '/typing.png'
import typingPage2 from '/typing2.png'
function Typing() {
    return(
        <div className="main-gc-content">
            <Link to="/"><img className="back-button"  alt="backButton" src={backButton}></img></Link>
            <div className="project-images-container">
                <div className="image-and-text">
                <img className="project-image" alt="javascript main page image" src={typingPage}></img>
                <div className="img-text-container">
                    <h1 className="img-text">Typing Game</h1>
                    <h2 className="img-text">Simple JavaScript web game. Characters will change to green or red depending on if the input is correct or incorrect.</h2>
                </div>
                </div>
            </div>
            <div className="project-images-container">
                <div className="image-and-text">
                <img className="project-image" alt="javaScript typing page image" src={typingPage2}></img>
                <div className="img-text-container">
                    <h1 className="img-text">End Screen</h1>
                    <h2 className="img-text">After the 60 seconds, the timer stops, and the text area locks. You can then view your final stats, and refresh to try again.</h2>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Typing