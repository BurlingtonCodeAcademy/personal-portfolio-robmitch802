import React from 'react';
import './style.css';
import Projects from './Projects.js'
import AboutMe from './AboutMe.js'
import Hobbies from './Hobbies.js'
import Work from './Work.js'
import Contact from './Contact.js'
import Footer from './Footer.js'
import Header from './Header.js'

class App extends React.Component {

render (){
  return (
    <div>
    <nav>
        <ul>
          <li className="first"><a href="" alt="about me">About Me</a></li>
          <li><a href="" alt="about me">Projects</a></li>
          <li><a href="" alt="about me">Interests</a></li>
          <li><a href="" alt="about me">Work</a></li>
          <li><a href="" alt="about me">Contact Me</a></li>
        </ul>
        </nav>
    <div className="container">
      <h1></h1>
      <img src="" />
      <div>About Me</div>
      <div>Projects</div>
      <div>Hobbies &amp; Interests</div>
      <div>Work History</div>
      <div>Contact Me</div>
      <div>Footer</div>

    </div>
    </div>
  );
  }
}

export default App;
