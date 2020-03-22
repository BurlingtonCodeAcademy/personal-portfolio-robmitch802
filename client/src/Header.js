import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li className="first"><Link to={'/'} >Home</Link></li>
                        <li><Link to={'/aboutme'}>About Me</Link></li>
                        <li><Link to={'/projects'} >Projects</Link></li>
                        <li><Link to={'/Interests'} >Interests</Link></li>
                        <li><Link to={'/Work'} >Work</Link></li>
                        <li><Link to={'/Contact'} >Contact Me</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header
