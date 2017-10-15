import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import './styles/animation.css';
import './styles/main.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
