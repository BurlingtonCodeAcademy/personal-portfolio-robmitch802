import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom' 
import './index.css';
import App from './App.js';
import AboutMe from './AboutMe.js'
import Contact from './Contact.js'
import Projects from './Projects.js'
import Header from './Header.js'
import Interests from './Interests.js'

import * as serviceWorker from './serviceWorker';

function Router(props) {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path={'/'} component={App} />
                <Route path={'/AboutMe'} component={AboutMe} />
                <Route path={'/Projects'} component={Projects} />
                <Route path={'/Contact'} component={Contact} />
                <Route path={'/Interests'} component={Interests} />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();
