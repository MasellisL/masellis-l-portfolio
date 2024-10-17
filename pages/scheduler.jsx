import '../src/pages.css'
import {Link} from 'react-router-dom';
import backButton from '/back-button.png'
import nestWorkHome from '/nest-work-home.png';
import nestWorkResults from '/nest-work-results.png';
import nestWorkTutorial from '/nest-work-tutorial.png';

function Gamecube() {
    return(
        <div className="main-gc-content">
            <Link to="/"><img className="back-button" src={backButton}></img></Link>
            <div className="project-images-container">
                <div className="image-and-text">
                <img className="project-image" src={nestWorkHome}></img>
                <div className="img-text-container">
                    <h1 className="img-text">Overview page</h1>
                    <h2 className="img-text">Page for selecting which interns will be included in the pairing algorithm.</h2>
                </div>
                </div>
                <div className="image-and-text">
                <img className="project-image" src={nestWorkResults}></img>
                <div className="img-text-container">
                    <h1 className="img-text">Results</h1>
                    <h2 className="img-text">Page for viewing the pairings that have been created, with the ability to download as a csv file, and edit pairings.</h2>
                </div>
                </div>
                <div className="image-and-text">
                <img className="project-image" src={nestWorkTutorial}></img>
                <div className="img-text-container">
                    <h1 className="img-text">Tutorial Modal</h1>
                    <h2 className="img-text">Tutorial modal for first time users.</h2>
                </div>
                </div>
                <div className="image-and-text">
                <img className="project-image" src={nestWorkTutorial}></img>
                <div className="img-text-container">
                    <h1 className="img-text">Tutorial Modal</h1>
                    <h2 className="img-text">Tutorial modal for first time users.</h2>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Gamecube