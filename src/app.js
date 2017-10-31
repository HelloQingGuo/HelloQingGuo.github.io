import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './home/home';
import Dashboard from './dashboard';
import Fanalytical from './projects/fanalytical';
import Hearful from './projects/hearful';
import Taxonomy from './projects/taxonomy';
import Youplea from './projects/youplea';
import SideNav from './widgets/side_nav';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/dashboard/projects/fanalytical" component={Fanalytical} />
          <Route path="/dashboard/projects/hearful" component={Hearful} />
          <Route path="/dashboard/projects/taxonomy" component={Taxonomy} />
          <Route path="/dashboard/projects/youplea" component={Youplea} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Home} />
          <Redirect path="*" to="/" />
        </Switch>
        <SideNav />
      </div>
    );
  }
}
export default App;
