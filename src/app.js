import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Home from './home/home';
import Dashboard from './dashboard';
import Fanalytical from './projects/fanalytical/fanalytical';
import Hearful from './projects/hearful/hearful';
import Taxonomy from './projects/taxonomy/taxonomy';
import Youplea from './projects/youplea/youplea';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgShown: false,
    };

    this.handleClickOnNavbutton = this.handleClickOnNavbutton.bind(this);
  }

  handleClickOnNavbutton() {
    this.setState({ bgShown: !this.state.bgShown });
  }

  render() {
    const { bgShown } = this.state;
    return (
      <div className="app">
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
        </BrowserRouter>
        <Button
          shape="circle"
          icon="bars"
          size="lg"
          type="primary"
          className="navbutton"
          onClick={this.handleClickOnNavbutton}
        />
        <div className={bgShown ? 'bgcover shown' : 'bgcover'}>
          {bgShown
            ? <QueueAnim
              component="ul"
              className="navlist"
              type={['right', 'left']}
              interval={50}
              ease="easeInSine"
              duration={150}
            >
              <li key="nav1">project</li>
              <li key="nav2">me</li>
              <li key="nav3">resume</li>
            </QueueAnim>
            : null}
        </div>
      </div>
    );
  }
}
export default App;
