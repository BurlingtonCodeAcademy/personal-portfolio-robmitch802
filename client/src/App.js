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
                    I find ways to get things done, with a smile. Write, run, code.
                  </p>
                  <p className="center"><Link to={'/AboutMe'} onClick={this.locationHandler} ><strong>More About Me</strong></Link></p>
                </div>
              
          </div>
          <div class="middleContainer">
              <div className="articleContainer">
                
                <div className="appImageContainer">
                  {/* <Link to={'/Projects'} >
                  <img className="appImage" src="/img/geo-vermonter.jpg" />
                  </Link>
                  <div className="caption" ></div> */}
                  <p>Code is magic made real.</p>
                </div>

                <div className="words" >
                <p><strong><Link to={'/Projects'} >Projects</Link></strong></p>
                </div>
              </div>
            
            <div className="articleContainer">
                <div className="appImageContainer">
                  {/* <Link to={'/Interests'} >
                  <img className="appImage" src="/img/ontario_ducks.jpg" />
                  </Link>
                  <div className="caption" ></div> */}
                  <p>What I do when I'm not doing this.</p>
                </div>

                <div className="words" >
                  <p>
                  <strong><Link to={'/Interests'} >Play</Link></strong>
                  </p>
                </div>
              </div>
            
            <div className="articleContainer">
                <div className="appImageContainer">
                  {/* <Link to={'/Work'} >
                  <img className="appImage" src="img/rob04.jpg" />
                  </Link>
                  <div className="caption" ></div> */}
                  <p>History, one job at a time.</p>
                </div>
                <div className="words" >
                  <p>
                   <strong><Link to={'/Work'} >Work</Link></strong>
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
