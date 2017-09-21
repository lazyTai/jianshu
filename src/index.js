import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routers from '../src/routers.js'
import "./assets/index.css"


ReactDOM.render(<Routers/>, document.getElementById('root'));
registerServiceWorker();
