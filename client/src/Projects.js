import React from 'react'


class Projects extends React.Component {

//     storyRender = () => {

//     }
//     let listContainer = document.getElementById('restoList')

// async function getPosts() {
//     let postList = await fetch('/api/restaurants.json')
//         .then((response) => {
//             return response.json() //turn readable stream into a json object
//         }).then((jsonObj) => { //then return that object as a variable
//             return jsonObj;
//         })
//     postList.forEach((post) => {
//         let title = post.name;
//         let id = post.id;
//         let image = post.image;
//         let address = post.address;
//         console.log('id: ' + id + 'title: ' + title)
//         listContainer.innerHTML += `<li><div class="img-container"><img src="${image}" /></div><h4><a href='/post/${id}'>${title}</a></h4><p>${address}</p></li>`
//         let website = `/post/${id}`
//         placeMarker(address, title, website, image)
//     })


    render() {
        return (
            <div className="container">
                <h1>Projects</h1>
                <ul className="projects">
                    <li><h4>Development</h4></li>
                    <li><strong>Rutlandia</strong>
                    <br /><a href="https://github.com/BurlingtonCodeAcademy/yelpington-robmitch802">Github 
                    <i className="fab fa-github-square"></i></a>
                    <br />
                    <img src="#" alt="screencapture rutlandia" /></li>
                    <li><strong>Turtle-Tac-Toe</strong><br />
                    <a href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-robmitch802">Github <i className="fab fa-github-square"></i><br/>
                    <img src="img/tictactoe.jpg" alt="Turtle Tac Toe" /></a></li>
                    <li><strong>Geo-Vermonter</strong> <br />
                    <a href="https://github.com/BurlingtonCodeAcademy/geo-vermonter-Kevin-and-Rob" >Github <i className="fab fa-github-square"></i><br/>
                    <img src="img/geo-vermonter.jpg" alt="Geo-Vermonter project screen grab" /></a></li>
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
