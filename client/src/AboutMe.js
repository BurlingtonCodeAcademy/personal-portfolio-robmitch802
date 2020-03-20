import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


class AboutMe extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>About Me</h1>
                <div><img alt="barnyard, two boys, one younger, older one holding chicken" src="/rob04.jpg" /></div>
                <p>I'm a native Vermonter. (That's me on the left)</p>
                <p></p>
                <Link to={'/'} ><button>Home</button></Link>
            </div>
        )
    }
}

export default AboutMe
