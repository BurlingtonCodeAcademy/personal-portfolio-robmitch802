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
                <nav id="headerNav">
                    <ul>
                        <li className="first" id="homePage"><Link to={'/'} >Home</Link></li>
                        <li id="aboutPage"><Link to={'/aboutme'}>About Me</Link></li>
                        <li id="projectsPage"><Link to={'/projects'} >Projects</Link></li>
                        <li id="interestsPage"><Link to={'/Interests'} >Interests</Link></li>
                        <li id="workPage"><Link to={'/Work'} >Work</Link></li>
                        <li id="contactPage"><Link to={'/Contact'} >Contact Me</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header
