import '../src/home.css'
import GrassyImage from '../src/assets/pixelGrass.png';
import {Link} from 'react-router-dom';
import gitHub from "/git-hub.png";
import linkedIn from "/linked-in.png";
import resume from "/Leo-resume.pdf"
import resumeIcon from "/resume-icon.png"

function Home() {
    return(
      <section className="introSection">
        <img className="grassyImage" src={GrassyImage}></img>
      </section>
  )
}

export default Home