import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

class App extends React.Component {
  constructor(props){
    super(props) 

    this.state={
      currentLoc: ''
      
    }

  }

locationHandler = () => {
  let currentSpot = this.state.currentLoc;
  this.setState = {
    currentLoc: currentSpot,
  }
  console.log('URL: ', window.location.href)
}


render (){
  return (
    <div>
    <div className="container">
      <h1>Rob Mitchell</h1>
      <div className="listContainer">
      <div className="homeLink"><Link to={'/AboutMe'} onClick={this.locationHandler} ><img className="appImage" src="/rob04.jpg" /><span>About Me</span></Link></div>
      <div className="homeLink"><Link to={'/Projects'} >Projects</Link></div>
      <div className="homeLink"><Link to={'/Interests'} >Hobbies &amp; Interests</Link></div>
      <div className="homeLink"><Link to={'/Work'} >Work</Link></div>
      <div className="homeLink"><Link to={'/Contact'} ><span>Contact Me</span></Link></div>
      </div>
    </div>
    </div>
  );
  }
}

export default App;
