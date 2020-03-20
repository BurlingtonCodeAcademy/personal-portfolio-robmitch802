import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

class Hobbies extends React.Component {
    render() {
        return (
            <div>
                <h1>Things I like to Do</h1>
                <div>Skiing</div>
                <div>Running</div>
                <div>Biking</div>
                <div>Cooking</div>
                <div>Figure things out</div>
                <div><Link to={'/'} >Home</Link></div>
            </div>
        )
    }
}

export default Hobbies
