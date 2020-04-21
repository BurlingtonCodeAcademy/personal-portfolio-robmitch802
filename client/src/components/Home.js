import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            
            <div className="container">
            <h2>What you need to know:</h2>
                <div className="aboutContainer">
                    <div><img alt="barnyard, two boys, one younger, older one holding chicken" src="img/rob04.jpg" /></div>
                    <div className="aboutContainer">
                        <p>I'm a native Vermonter.</p>
                        <p>A journalist, former professional athlete, and current full stack web developer in training. </p>
                        <p>I've made a career of keeping my cool in stressful situations, and coming up with simple solutions for complex problems. </p>
                        <p>I find ways to get things done, with a smile. Write, run, code.</p>
                    </div>
                </div>
              </div>
        )
    }
}

export default Home
