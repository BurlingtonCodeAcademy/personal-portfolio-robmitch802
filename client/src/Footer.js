import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li className="first"><Link to={'/contact'} >Contact Me</Link></li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </nav>
                
                
            </div>
        )
    }
}

export default Footer
