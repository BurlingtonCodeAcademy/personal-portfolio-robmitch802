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
                        <li className="first" id="homePage"><Link to={'/'} >home</Link></li>
                        <li id="aboutPage"><Link to={'/aboutme'}>about</Link></li>
                        <li id="projectsPage"><Link to={'/projects'} >projects</Link></li>
                        <li id="interestsPage"><Link to={'/Interests'} >interests</Link></li>
                        <li id="workPage"><Link to={'/Work'} >work</Link></li>
                        <li id="contactPage"><Link to={'/Contact'} >contact </Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header
