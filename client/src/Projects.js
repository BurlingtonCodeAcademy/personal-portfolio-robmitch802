import React from 'react'

class Projects extends React.Component {

//     storyRender = () => {

//     }
//     let storyContainer = document.getElementById('storyList')

// async function storyRender() {
//     let storyList = await fetch('/api/stories.json')
//         .then((response) => {
//             return response.json() //turn readable stream into a json object
//         }).then((jsonObj) => { //then return that object as a variable
//             return jsonObj;
//         })
//     postList.forEach((post) => {
//         let title = post.title;
//         let id = post.id;
//         let image = post.image;
//         let url = post.url;
//         let snippet = post.snippet;
//         console.log('id: ' + id + 'title: ' + title)
//         listContainer.innerHTML += `<li><div class="img-container"><img src="${image}" /></div><h4><a href='${url}'>${title}</a></h4></li>`
//        
//  })


    render() {
        return (
            <div className="container">
                <h1>Projects</h1>
                <ul className="projects">
                    <li><h4>Development</h4></li>
                    <li><strong>Rutlandia</strong>
                    <br /><span className="refer"><a href="https://github.com/BurlingtonCodeAcademy/yelpington-robmitch802">Github 
                    <i className="fab fa-github-square"></i></a></span>
                    <br />
                    <img src="#" alt="screencapture rutlandia" />
                    <p>A project that combines json api calls with the mapping library Leaflet to make a Yelp-style index of restaurants.</p>
                    </li>
                    <li><strong>Turtle-Tac-Toe</strong><br />
                    <span className="refer"><a href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-robmitch802">Github <i className="fab fa-github-square"></i><br/>
                    <img src="img/tictactoe.jpg" alt="Turtle Tac Toe" /></a></span>
                    <p>The classic Tic-Tac-Toe game, written as Turtle vs. Tortoise, with human vs. computer and human vs. human options. </p>
                    </li>
                    <li><strong>Geo-Vermonter</strong> <br />
                    <span><a href="https://github.com/BurlingtonCodeAcademy/geo-vermonter-Kevin-and-Rob" >Github <i className="fab fa-github-square"></i><br/>
                    <img src="img/geo-vermonter.jpg" alt="Geo-Vermonter project screen grab" /></a></span>
                    <p>A pair programmed game based on Geo-Guessr, using api calls and the mapping library Leaflet. </p>
                    </li>
                    <li><h4>Writing</h4></li>
                    <li>Reporting</li>
                    <li>Commentary</li>
                    <li></li>
                    <li></li>
                </ul>

            </div>
        )
    }
}

export default Projects
