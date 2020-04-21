import React from 'react'
import '../style.css'
import { Link } from 'react-router-dom'


class Contact extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Contact Me</h1>
                <p>It's easy when I'm home in Vermont.</p>
                <Link to={'/'} ><button>Home</button></Link>
            </div>
        )
    }
}

export default Contact
