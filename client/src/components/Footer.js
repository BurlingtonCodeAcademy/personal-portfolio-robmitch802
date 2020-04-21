import React from 'react'
import { ListGroup, Row, Column, Container } from 'react-bootstrap'

class Footer extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                <ListGroup horizontal={'md'} className="footerList horizontal-md">
                    <ListGroup.Item className="border-0"><a href="https://twitter.com/robmitch802" ><i className="fab fa-twitter-square"></i>&nbsp;twitter</a></ListGroup.Item>
                    <ListGroup.Item className="border-0"><a href="https://www.instagram.com/robmitch802/" ><i className="fab fa-instagram-square"></i>&nbsp;instagram</a></ListGroup.Item>
                    <ListGroup.Item className="border-0"><a href="https://www.linkedin.com/in/robert-mitchell-3b9b237/" ><i className="fab fa-linkedin"></i>&nbsp;linkedin</a></ListGroup.Item>
                    <ListGroup.Item className="border-0"><a href="https://github.com/robmitch802" ><i className="fab fa-github-square"></i>&nbsp;github</a></ListGroup.Item>
                    
                </ListGroup>
                </Row>
                <Row>
                <ListGroup horizontal={'md'} className="footerList horizontal-md">
                    <ListGroup.Item className="border-0"><i className=""></i>rutland, vt 05701</ListGroup.Item>
                    <ListGroup.Item className="border-0"><a href="tel:8024651064" ><i className="fas fa-phone-square"></i>&nbsp;802.465.1064</a></ListGroup.Item>
                    <ListGroup.Item className="border-0">roromitch [at] gmail.com</ListGroup.Item>
                </ListGroup>
                </Row>
            </Container>
        )
    }
}

export default Footer
