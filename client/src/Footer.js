import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return (
            <div>
                <nav className="footerNav">
                    <ul className="firstRow">
                        <li className="first"><Link to={'/contact'} ><i className="fab fa-home-square"></i>Contact Me</Link></li>
                        <li><a href="https://twitter.com/robmitch802" ><i className="fab fa-twitter-square"></i>&nbsp;Twitter</a></li>
                        <li><a href="https://www.instagram.com/robmitch802/" ><i className="fab fa-instagram-square"></i>&nbsp;Instagram</a></li>
                        <li><a href="https://www.linkedin.com/in/robert-mitchell-3b9b237/" ><i className="fab fa-linkedin"></i>&nbsp;LinkedIn</a></li>
                        <li><a href="https://github.com/robmitch802" ><i className="fab fa-github-square"></i>&nbsp;Github</a></li>
                    </ul>
                    <ul className="secondRow">
                        <li className="first"><i className=""></i>Rutland, VT 05701</li>
                        <li><a href="tel:8024651064" ><i className="fas fa-phone-square"></i>&nbsp;802.465.1064</a></li>
                        <li>roromitch [at] gmail.com</li>
                        <li></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Footer
