import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import spiderMan from "../public/literally-spiderman.jpg"
import gitHub from "../public/git-hub.png"
import linkedIn from "../public/linked-in.png"

function App() {
    return(
      <div className="main-content">
        <div className="row">
          <div className="col-xl-6 sticky-column">
            <div className="leo-text">
              <h1>Leo Masellis,<br></br>Web Developer</h1>
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
              <p>In my later years of high school, 2022-2023, I started teaching myself how to code using a book titled <i>A Smarter Way to Learn HTML & CSS</i> by Mike Myers. After learning HTML/CSS, I went on to practice C++ and Python. After I graduated high school in 2023, I landed an internship at <a href="https://www.bayvalleytech.com/">Bay Valley Tech</a>, a company which strives to help its students enter into the world of tech. During my time at Bay Valley Tech, I learned JavaScript, and React, as well as how to use GitHub, Figma, and WordPress.</p>
              <p>My time now is spent learning new libraries for web development, and creating new projects in order to gain more and more experience each day. I have several projects that I am quite proud of. They are posted below.</p>
              <p>When I am not at the computer, I am usually playing the guitar. I have a great passion for making music; I really love emo and anything indie-rock.</p>
              <img src={spiderMan}></img>
              <img src={spiderMan}></img>
              <img src={spiderMan}></img>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App
