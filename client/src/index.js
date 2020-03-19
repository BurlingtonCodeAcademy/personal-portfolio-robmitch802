import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import AboutMe from './AboutMe.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
