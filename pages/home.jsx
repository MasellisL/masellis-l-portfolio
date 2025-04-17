import '../src/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import gitHub from "/git-hub.png";
import linkedIn from "/linked-in.png";
import gameCube from "/gamecube.png";
import nestWork from "/nest-work-home.png";
import typing from "/typing.png";
import guitarNotes from "/guitar-notes.png";
import resume from "/Leo-resume.pdf"
import resumeIcon from "/resume-icon.png"

function Home() {
    return(
      <div className="main-content">
        <div className="row">
          <div className="col-xl-6 sticky-column">
            <p className="leo-name">Leo Masellis</p>
            <div className="leo-text">
              <h1>Front End Web Developer Portfolio<br></br></h1>
            </div>
            <div className="leo-fact">
              <h2> I build beautiful and easy-to-use<br></br> websites for anyone.</h2>
            </div>
            <div className="leo-links">
            <a href="https://github.com/MasellisL" target="_blank" rel="noopener noreferrer"><img className="social-icons" src={gitHub}></img></a>
            <a href="https://www.linkedin.com/in/leo-masellis-76663a273/" target="_blank" rel="noopener noreferrer"><img className="social-icons" src={linkedIn}></img></a>
            <a href={resume} download target="_blank" rel="noopener noreferrer"><img className="social-icon-resume" src={resumeIcon} alt="Download Resume"></img></a>
            </div> 
          </div>
          <div className="col-xl-6 scrollable-column">
            <section>
              <div className="story-text">
                <article>
                  <p>In my later years of high school, 2022-2023, I started teaching myself how to code using a book titled <i>A Smarter Way to Learn HTML & CSS</i> by Mike Myers. After learning HTML/CSS, I went on to practice C++ and Python. After I graduated high school in 2023, I landed an internship at <a className="bvt" href="https://www.bayvalleytech.com/">Bay Valley Tech</a>, a company which strives to help its students enter into the world of tech. During my time at Bay Valley Tech, I learned JavaScript, and React, as well as how to use GitHub, Figma, and WordPress.</p>
                  <p>My time now is spent learning new libraries for web development, and creating new projects in order to gain more and more experience each day. I have several projects that I am quite proud of. They are posted below.</p>
                  <p>When I am not at the computer, I am usually playing the guitar. I have a great passion for making music; I really love emo and going to small concerts</p>
                </article>
              </div>
              <h2 className="experience-title">Experience.</h2>
              <div className="experience-container">
              <h3><a className="bvt" href="https://www.bayvalleytech.com/">Bay Valley Tech</a></h3>
              <h4>Web Development Intern</h4>
              <h5>August 28, 2023 - August 9, 2024 </h5>
              <h3><a className="bvt" href="https://digitalnest.org/">Digital Nest</a></h3>
              <h4>General Web Development Intern</h4>
              <h5>August 27, 2024 - Present</h5>
              </div>
              <h2 className="projects-title">Projects.</h2>

              <div className="projects">
                <div className="project-container">
                <Link to="/scheduler"><img src={nestWork} className="project-img" alt="JavaScript-scheduler-project-image"></img></Link>
                  <div className="gamecube-proj-desc">
                    <h4 className="project-title-home">Digital Nest<br></br>Meeting Scheduler</h4>
                    <p className="disappear">Front-end JavaScript website made for Digital Nest for leads to use for scheduling one on one meetings for interns.</p>
                  </div>
                </div>
                <div className="project-container">
                <Link to="/gamecube"><img src={gameCube} alt="React-gamecube-project-image" className="project-img"></img></Link>
                  <div className="gamecube-proj-desc">
                    <h4 className="project-title-home">Gamecube Controller Commerce Website</h4>
                    <p className="disappear">This is an E-commerce website that I made for myself to sell modded Gamecube controllers that I make. The website is made with React, and Bootstrap.</p>
                  </div>
                </div>
                <div className="project-container">
                <Link to="/guitar"><img src={guitarNotes} alt="React-Guitar-Project" className="project-img"></img></Link>
                  <div className="gamecube-proj-desc">
                    <h4 className="project-title-home">Guitar Notes Finder</h4>
                    <p className="disappear">This a small front-end website I made for myself to use as a tool for writing music on guitar.</p>
                  </div>
                </div>
                <div className="bottom-project-container">
                <Link to="/typing"><img src={typing} alt="JavaScript-Typing-Project" className="project-img"></img></Link>
                  <div className="gamecube-proj-desc">
                    <h4 className="project-title-home">Javascript Typing Game</h4>
                    <p className="disappear">This is a browser game that I made with Javascript. The game prompts you to type the passage shown above, and then starts a minute long timer. The website tracks your stats.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
  )
}

export default Home