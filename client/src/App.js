import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentLoc: ''

    }

  }



  render() {
    return (
      <div>
        <div className="container">
          <h1>rob mitchell</h1>
          <div className="topContainer">
            <div className="homeLink">

              <Link to={'/AboutMe'} onClick={this.locationHandler} ><span className="hedLink">About Me</span></Link>
              <div className="articleContainer">
                <div className="appImageContainer">
                  <img className="appImage" src="/img/rob04.jpg" />
                  <div className="caption" >caption</div>
                </div>

                <div className="words" >
                  <p>I'm a native Vermonter who left a career in journalism to start learning to code.
                </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div class="middleContainer">
            <div className="homeLink">
              <div className="articleContainer">
                <div><Link to={'/Projects'} >Projects</Link></div>
                <div className="appImageContainer">
                  <img className="appImage" src="/img/geo-vermonter.jpg" />
                  <div className="caption" >caption</div>
                </div>

                <div className="words" ><p>
                </p></div>
              </div>

            </div>
            <div className="homeLink">
            <div className="articleContainer">
              <div><Link to={'/Interests'} >Hobbies &amp; Interests</Link></div>
                <div className="appImageContainer">
                  <img className="appImage" src="/img/ontario_ducks.jpg" />
                  <div className="caption" >caption</div>
                </div>

                <div className="words" ><p>
                </p></div>
              </div>
            </div>
            <div className="homeLink">
            <div className="articleContainer">
              <div><Link to={'/Work'} >Work</Link></div>
                <div className="appImageContainer">
                  <img className="appImage" src="/rob04.jpg" />
                  <div className="caption" >caption</div>
                </div>

                <div className="words" ><p>
                </p></div>
              </div>
            </div>
          </div>
          <div className="homeLink"><Link to={'/Contact'} ><span>Contact Me</span></Link></div>
          </div> {/* end container class */}
      </div>
    );
  }
}

export default App;
