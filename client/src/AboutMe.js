import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


class AboutMe extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>What you need to know:</h1>
                <div className="aboutContainer">
                    <div><img alt="barnyard, two boys, one younger, older one holding chicken" src="/rob04.jpg" /></div>
                    <div>
                        <p>I'm a native Vermonter. (That's me on the left)</p>
                        <p>A journalist, former professional athlete, and current full stack web developer in training. </p>
                        <p>I've made a career of keeping my cool in stressful situations, and coming up with simple solutions for complex problems. </p>
                    </div>
                </div>
                <Link to={'/'} ><button>Home</button></Link>
            </div>
        )
    }
}

export default AboutMe
