import '../src/pages.css'
import {Link} from 'react-router-dom';
import bayList1 from '/baylist.png'
import bayList3 from '/baylist-register.png'
import backButton from '/back-button.png'

function Gamecube() {
    return(
        <div className="main-gc-content">
            <Link to="/"><img className="back-button" src={backButton}></img></Link>
            <div className="project-images-container">
                <div className="image-and-text">
                <img className="project-image" src={bayList1}></img>
                <div className="img-text-container">
                    <h1 className="img-text">Account Page</h1>
                    <h2 className="img-text">A place where users can change their account settings.</h2>
                </div>
                </div>
                <div className="image-and-text">
                <img className="project-image" src={bayList3}></img>
                <div className="img-text-container">
                    <h1 className="img-text">Sign Up</h1>
                    <h2 className="img-text">A place where users can sign up to use our website.</h2>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Gamecube