import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/style.css';
import NavBar from './components/Navbar.js'
import AboutMe from './components/AboutMe.js'
import Header from './components/Header.js'
import Work from './components/Work.js'
import Projects from './components/Projects.js'
import Interests from './components/Interests.js'
import Contact from './components/Contact'
import Footer from './components/Footer.js'
import Home from './components/Home.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentLoc: 'home'
    }
  }

  workHandler = () =>{
    this.setState({
      currentLoc: 'work'
    })
    console.log(this.state.currentLoc)
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Header />
          <Route path="/" exact >
            <Home />
          </Route>
          <Route path="/aboutme" >
          <AboutMe /> 
          </Route>
            <Route path="/work" onClick={this.workHandler} >
              <Work />
            </Route>
            <Route path="/projects" >
              <Projects />
            </Route>
            <Route path="/interests" >
              <Interests />
            </Route>
            <Route path="/contact" >
              <Contact />
            </Route>

            <Footer />
        </Router>

      </div>
    );
    }
}

export default App;
