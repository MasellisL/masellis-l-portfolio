import '../src/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import gitHub from "../public/git-hub.png";
import linkedIn from "../public/linked-in.png";
import gameCube from "../public/gamecube.png";
import bayList from "../public/baylist.png";
import typing from "../public/typing.png";

function Home() {
    return(
      <div className="main-content">
        <div className="row">
          <div className="col-xl-6 sticky-column">
            <div className="leo-text">
              <p>Leo Masellis,<br></br>Web Developer</p>
            </div>
            <div className="leo-fact">
              <p> I build beautiful and easy-to-use<br></br> websites for anyone.</p>
            </div>
            <div className="leo-links">
            <a href="https://github.com/MasellisL"><img className="social-icons" src={gitHub}></img></a>
            <a href="https://www.linkedin.com/in/leo-masellis-76663a273/"><img className="social-icons" src={linkedIn}></img></a>
            </div> 
          </div>
          <div className="col-xl-6 scrollable-column">
            <div className="story-text">
              <p>In my later years of high school, 2022-2023, I started teaching myself how to code using a book titled <i>A Smarter Way to Learn HTML & CSS</i> by Mike Myers. After learning HTML/CSS, I went on to practice C++ and Python. After I graduated high school in 2023, I landed an internship at <a className="bvt" href="https://www.bayvalleytech.com/">Bay Valley Tech</a>, a company which strives to help its students enter into the world of tech. During my time at Bay Valley Tech, I learned JavaScript, and React, as well as how to use GitHub, Figma, and WordPress.</p>
              <p>My time now is spent learning new libraries for web development, and creating new projects in order to gain more and more experience each day. I have several projects that I am quite proud of. They are posted below.</p>
              <p>When I am not at the computer, I am usually playing the guitar. I have a great passion for making music; I really love emo and anything indie-rock.</p>
            </div>
            <h2 className="projects-title">Projects.</h2>
            <div className="projects">
              <div className="project-container">
                <Link to="/gamecube"><img src={gameCube} className="project-img"></img></Link>
                <div className="gamecube-proj-desc">
                  <h4>Gamecube Controller E-Commerce Website</h4>
                  <p>This is an E-commerce website that I made for myself to sell modded Gamecube controllers that I make. The website is made with React, and Bootstrap.</p>
                </div>
              </div>
              <div className="project-container">
                <img src={typing} className="project-img"></img>
                <div className="gamecube-proj-desc">
                  <h4>Javascript Typing Game</h4>
                  <p>This is a browser game that I made with Javascript. The game prompts you to type the passage shown above, and then starts a minute long timer. The website tracks your mistakes, your words per minute, and your accuracy. The characters in the passage change to green or red depending on if the input was correct or incorrect.</p>
                </div>
              </div>
              <div className="project-container">
                <img src={bayList} className="project-img"></img>
                <div className="gamecube-proj-desc">
                  <h4>Group E-Commerce Website</h4>
                  <p>This is a full stack E-commerce website I worked on with my group at Bay Valley Tech. I was in charge of front end work, using Bootstrap and React. Users are able to sign up, make purchases, as well as list and sell items.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home