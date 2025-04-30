import './home.css'
// import {Link} from 'react-router-dom';
// import gitHub from "/git-hub.png";
// import linkedIn from "/linked-in.png";
// import resume from "/Leo-resume.pdf"
// import resumeIcon from "/resume-icon.png"

function Home() {
    return(
      <section className="introSection">
        <div className="nameAndOccupation">
          <p className="myName">Leo Masellis</p>
          <h1 className="myOccupation">Front End Web Developer</h1>
        </div>
      </section>
  )
}

export default Home