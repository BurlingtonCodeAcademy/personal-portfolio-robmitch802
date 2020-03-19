import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


class AboutMe extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>About Me</h1>
                <div><img src="./img/rob04.jpg" /></div>
                <p>I'm a native Vermonter.</p>
                <Link to={'/'} ><button>Home</button></Link>
            </div>
        )
    }
}

export default AboutMe
