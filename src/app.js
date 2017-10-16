import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './home/home';
import Dashboard from './dashboard';
import Fanalytical from './projects/fanalytical/fanalytical';
import Hearful from './projects/hearful/hearful';
import Taxonomy from './projects/taxonomy/taxonomy';
import Youplea from './projects/youplea/youplea';
import SideNav from './widgets/side_nav/side_nav';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgShown: false,
      curNav: 0,
      navItems: [
        {
          name: 'home',
          id: 0,
          num: '/',
        },
        {
          name: 'me',
          id: 1,
          num: '/dashboard/me',
        },
        {
          name: 'project',
          id: 2,
          num: '/dashboard/projects',
        },
        {
          name: 'resume',
          id: 3,
          num: '/dashboard/resume',
        },
      ],
    };

    this.handleClickOnNavbutton = this.handleClickOnNavbutton.bind(this);
    this.setCurNav = this.setCurNav.bind(this);
  }

  setCurNav(navItemId) {
    this.setState({ curNav: navItemId });
  }

  handleClickOnNavbutton() {
    this.setState({ bgShown: !this.state.bgShown });
  }
  render() {
    const { curNav, navItems } = this.state;
    const DashboardWithProps = props =>
      (<Dashboard
        {...this.state}
        {...props}
        handleClickOnNavbutton={this.handleClickOnNavbutton}
        setCurNav={this.setCurNav}
      />);
    const HomeWithProps = props =>
      (<Home
        curNav={curNav}
        navItems={navItems}
        {...props}
        handleClickOnNavbutton={this.handleClickOnNavbutton}
        setCurNav={this.setCurNav}
      />);
    return (
      <div className="app">
        <Switch>
          <Route path="/dashboard/projects/fanalytical" component={Fanalytical} />
          <Route path="/dashboard/projects/hearful" component={Hearful} />
          <Route path="/dashboard/projects/taxonomy" component={Taxonomy} />
          <Route path="/dashboard/projects/youplea" component={Youplea} />
          <Route path="/dashboard" component={DashboardWithProps} />
          <Route path="/" component={HomeWithProps} />
          <Redirect path="*" to="/" />
        </Switch>
        <SideNav
          {...this.state}
          handleClickOnNavbutton={this.handleClickOnNavbutton}
          setCurNav={this.setCurNav}
        />
      </div>
    );
  }
}
export default App;
