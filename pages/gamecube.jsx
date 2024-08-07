import '../src/gamecube.css'
import {Link} from 'react-router-dom';
import gameCube from '/gamecube.png'
import gameCubeCart from '/gamecube-cart.png'
import gameCubeItems from '/gamecube-items.png'
import backButton from '/back-button.png'

function Gamecube() {
    return(
        <div className="main-gc-content">
            <Link to="/"><img className="back-button" src={backButton}></img></Link>
            <div className="project-images-container">
                <div className="image-and-text">
                <img className="project-image" src={gameCube}></img>
                <div className="img-text-container">
                    <h1 className="img-text">Home page</h1>
                    <h2 className="img-text">Both images are clickable and send the user to the page listed. </h2>
                </div>
                </div>
                <div className="image-and-text">
                <img className="project-image" src={gameCubeCart}></img>
                <div className="img-text-container">
                    <h1 className="img-text">Cart Page</h1>
                    <h2 className="img-text">Items added to cart are viewable on this page. Items are able to be removed, and their total is added up and displayed on the right.</h2>
                </div>
                </div>
                <div className="image-and-text">
                <img className="project-image" src={gameCubeItems}></img>
                <div className="img-text-container">
                    <h1 className="img-text">Cart Page</h1>
                    <h2 className="img-text">Items are displayed here, and are able to be clicked in order to enlarge the image, read the description, and add the item to the cart.</h2>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Gamecube