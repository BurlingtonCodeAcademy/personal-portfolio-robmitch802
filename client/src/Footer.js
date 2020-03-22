import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="firstRow">
                        <li className="first"><Link to={'/contact'} >Contact Me</Link></li>
                        <li><a href="" ><i className="fab fa-github-square"></i>Twitter</a></li>
                        <li><a href="" ><i className="fab fa-github-square"></i>Instagram</a></li>
                        <li><a href="" ><i className="fab fa-linkedin"></i>LinkedIn</a></li>
                        <li><a href="" ><i className="fab fa-github-square"></i>Github</a></li>
                    </ul>
                    <ul className="secondRow">
                        <li className="first"><i className=""></i>Rutland, VT 05701</li>
                        <li><a href="" ><i className="fab fa-github-square"></i>802.465.1064</a></li>
                        <li>roromitch [at] gmail.com</li>
                        <li></li>
                    </ul>
                </nav>
                
                
            </div>
        )
    }
}

export default Footer
