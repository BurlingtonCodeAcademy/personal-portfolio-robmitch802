import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li className="first"><Link to={'/'} >Home</Link></li>
                            <li><Link to={'/aboutme'}>About Me</Link></li>
                        <li><Link to={'/projects'} >Projects</Link></li>
                        <li><Link to={'/Interests'} >Interests</Link></li>
                        <li>Work</li>
                        <li> Contact Me</li>
                    </ul>
                </nav>

                <Link to={'/'} >
                    Home
                </Link>
                <Link to={'/aboutme'} >
                    About
                </Link>
                <Link to={'/Projects'} >
                    Projects
                </Link>
            </div>
        )
    }
}

export default Header
