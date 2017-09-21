import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routers from '../src/routers.js'
import "./assets/index.css"
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<Routers/>, document.getElementById('root'));
registerServiceWorker();
