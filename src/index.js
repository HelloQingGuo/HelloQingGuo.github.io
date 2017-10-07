import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home/home';
import './styles/animation.css';
import './styles/main.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
