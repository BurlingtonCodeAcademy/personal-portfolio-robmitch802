import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

class App extends React.Component {

render (){
  return (
    <div>
    <div className="container">
      <h1>Rob Mitchell</h1>
      <div className="listContainer">
      <div> <Link to={'/AboutMe'} ><span>About Me</span></Link></div>
      <div><Link to={'/Projects'} >Projects</Link></div>
      <div><Link to={'/Interests'} >Hobbies &amp; Interests</Link></div>
      <div><Link to={'/Work'} >Work</Link></div>
      <div><Link to={'/Contact'} ><span>Contact Me</span></Link></div>
      </div>
    </div>
    </div>
  );
  }
}

export default App;
