import React from 'react';
import ReactDOM from 'react-dom';
// import useScroll from 'react-router-scroll/lib/useScroll';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Home from './home/home';
import Dashboard from './dashboard';
import Fanalytical from './projects/fanalytical/fanalytical';
import Hearful from './projects/hearful/hearful';
import Taxonomy from './projects/taxonomy/taxonomy';
import Youplea from './projects/youplea/youplea';
import './styles/animation.css';
import './styles/main.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard/projects/fanalytical" component={Fanalytical} />
      <Route path="/dashboard/projects/hearful" component={Hearful} />
      <Route path="/dashboard/projects/taxonomy" component={Taxonomy} />
      <Route path="/dashboard/projects/youplea" component={Youplea} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" component={Home} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
