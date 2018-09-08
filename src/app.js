import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { default as Loadable } from "./widgets/my_loadable";

import "./app.css";

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ "./home/home")
});

const Dashboard = Loadable({
  loader: () => import(/* webpackChunkName: "dashboard" */ "./dashboard")
});

const Fanalytical = Loadable({
  loader: () =>
    import(/* webpackChunkName: "fanalytical" */ "./projects/fanalytical")
});

const Hearful = Loadable({
  loader: () => import(/* webpackChunkName: "hearful" */ "./projects/hearful")
});

const Taxonomy = Loadable({
  loader: () => import(/* webpackChunkName: "taxonomy" */ "./projects/taxonomy")
});

const Youplea = Loadable({
  loader: () => import(/* webpackChunkName: "youplea" */ "./projects/youplea")
});

const NgGrid = Loadable({
  loader: () => import(/* webpackChunkName: "nggrid" */ "./projects/nggrid")
});

const SideNav = Loadable({
  loader: () => import(/* webpackChunkName: "side_nav" */ "./widgets/side_nav")
});

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            path="/dashboard/projects/fanalytical"
            component={Fanalytical}
          />
          <Route path="/dashboard/projects/hearful" component={Hearful} />
          <Route path="/dashboard/projects/taxonomy" component={Taxonomy} />
          <Route path="/dashboard/projects/youplea" component={Youplea} />
          <Route path="/dashboard/projects/nggrid" component={NgGrid} />
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
