import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

class App extends React.Component {

render (){
  return (
    <div>

    <div className="container">
      <h1></h1>
      <img src="" />
      <div className="listContainer">
      <div> <Link to={'/AboutMe'} ><span>About Me</span></Link></div>
      <div>Projects</div>
      <div>Hobbies &amp; Interests</div>
      <div>Work History</div>
      <div><Link to={'/Contact'} ><span>Contact Me</span></Link></div>
      <div>Footer</div>
      </div>
    </div>
    </div>
  );
  }
}

export default App;
