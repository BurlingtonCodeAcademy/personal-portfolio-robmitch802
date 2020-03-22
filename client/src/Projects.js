import React from 'react'


class Projects extends React.Component {

    storyRender = () => {

    }


    render() {
        return (
            <div className="container">
                <h1>Projects</h1>
                <h4>Development</h4>
                <div><strong>Rutlandia</strong> <br />
                    <a href="https://github.com/BurlingtonCodeAcademy/yelpington-robmitch802">Github <i className="fab fa-github-square"></i></a>
                </div>
                <div><strong>Turtle-Tac-Toe</strong><br />
                    <a href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-robmitch802">Github <i className="fab fa-github-square"></i></a>
                </div>
                <div><strong>Geo-Vermonter</strong> <br />
                    <a href="https://github.com/BurlingtonCodeAcademy/geo-vermonter-Kevin-and-Rob" >Github <i className="fab fa-github-square"></i></a>
                </div>
                <h4>Writing</h4>
                <div>Reporting</div>
                <div>Commentary</div>
            </div>
        )
    }
}

export default Projects
