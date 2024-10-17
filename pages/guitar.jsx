import '../src/pages.css'
import {Link} from 'react-router-dom';
import backButton from '/back-button.png'
import guitarNotes from '/guitar-notes.png';

function Guitar() {
    return(
        <div className="main-gc-content">
            <Link to="/"><img className="back-button" src={backButton}></img></Link>
            <div className="project-images-container">
                <div className="image-and-text">
                <img className="project-image" src={guitarNotes}></img>
                <div className="img-text-container">
                    <h1 className="img-text">Main Page</h1>
                    <h2 className="img-text">Type a note in the search bar, and every fret where that note appears will dynamically be highlighted.</h2>
                </div>
                </div>
            </div>
        </div>
    )};
            

export default Guitar