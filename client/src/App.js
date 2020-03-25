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
          <div className="headerTop"><h1>rob mitchell</h1></div>
          <div className="topContainer">
                <div className="words" >
                  <p>
                    I'm an experienced communications professional who left a career in journalism to learn coding, now on the path to becoming a full stack software developer.
                  </p>
                  <p className="center"><Link to={'/AboutMe'} onClick={this.locationHandler} ><span className="hedLink">More About Me</span></Link></p>
                </div>
              
          </div>
          <div class="middleContainer">
              <div className="articleContainer">
                
                <div className="appImageContainer">
                  <Link to={'/Projects'} >
                  <img className="appImage" src="/img/geo-vermonter.jpg" />
                  </Link>
                  <div className="caption" ></div>
                </div>

                <div className="words" >
                <p><Link to={'/Projects'} >Projects</Link></p>
                </div>
              </div>
            
            <div className="articleContainer">
                <div className="appImageContainer">
                  <Link to={'/Interests'} >
                  <img className="appImage" src="/img/ontario_ducks.jpg" />
                  </Link>
                  <div className="caption" ></div>
                </div>

                <div className="words" >
                  <p>
                  <Link to={'/Interests'} >Play</Link>
                  </p>
                </div>
              </div>
            
            
            <div className="articleContainer">
                <div className="appImageContainer">
                  <Link to={'/Work'} >
                  <img className="appImage" src="img/rob04.jpg" />
                  </Link>
                  <div className="caption" ></div>
                </div>
                <div className="words" >
                  <p>
                   <Link to={'/Work'} >Work</Link>
                  </p>
                </div>
              </div>
            </div>
          </div> {/* end container class */}
      </div>
    );
  }
}

export default App;
