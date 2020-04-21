import React from 'react'
import '../style.css'

class AboutMe extends React.Component {
    render() {
        return (
          <div class="container">  
          <div className="middleContainer">
              <div className="articleContainer">
                
                <div className="appImageContainer">
                  <p>Code is magic made real.</p>
                </div>

                <div className="words" >
                </div>
              </div>
            
            <div className="articleContainer">
                <div className="appImageContainer">
                 
                  <p>What I do when I'm not doing this.</p>
                </div>

                <div className="words" >
                  <p>
                  </p>
                </div>
              </div>
            
            <div className="articleContainer">
                <div className="appImageContainer">

                  <p>History, one job at a time.</p>
                </div>
                <div className="words" >
                  <p>
                  </p>
                </div>
              </div>
            </div>{/* end container class */}

            </div>
        )
    }
}

export default AboutMe
