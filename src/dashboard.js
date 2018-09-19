import React, { Component } from "react";
import { Route } from "react-router-dom";

import { default as Loadable } from "./widgets/my_loadable";
import Sidebar from "./widgets/sidebar/sidebar";
import meteor from "./assets/meteor.svg";
import Me from "./me/me";

import "./dashboard.css";

const Projects = Loadable({
  loader: () => import(/* webpackChunkName: "projects" */ "./projects/projects")
});

// const Me = Loadable({
//   loader: () => import(/* webpackChunkName: "me" */ "./me/me")
// });

const Resume = Loadable({
  loader: () => import(/* webpackChunkName: "resume" */ "./resume/resume")
});

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomPosition: [
        {
          top: 58,
          rotate: 45
        },
        {
          top: 40,
          rotate: 211
        }
      ]
    };
  }
  componentDidMount() {
    this.meteorTimer = setInterval(() => {
      const top = Math.floor(Math.random() * 101); // [0, 100]
      const rotate = Math.floor(Math.random() * 361); // [0, 360]
      const top2 = Math.floor(Math.random() * 101); // [0, 100]
      const rotate2 = Math.floor(Math.random() * 361); // [0, 360]
      this.setState({
        randomPosition: [
          {
            top,
            rotate
          },
          {
            top: top2,
            rotate: rotate2
          }
        ]
      });
    }, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.meteorTimer);
  }

  render() {
    const { randomPosition } = this.state;
    const { curNav, navItems, handleClickOnNavbutton, setCurNav } = this.props;
    const meteorStyles = randomPosition.map(each => ({
      top: `${each.top}%`,
      transform: `rotate(${each.rotate}deg)`
    }));
    return (
      <div className="dashboard">
        <Sidebar
          curNav={curNav}
          navItems={navItems}
          handleClickOnNavbutton={handleClickOnNavbutton}
          setCurNav={setCurNav}
        />
        <div className="content">
          <Route path="/dashboard/projects" component={Projects} />
          <Route path="/dashboard/me" component={Me} />
          <Route path="/dashboard/resume" component={Resume} />
        </div>
        <div className="stars" />
        <div className="stars-lg" />
        <figure className="meteor" style={meteorStyles[0]}>
          <img src={meteor} alt="meteor" />
        </figure>
        <figure className="meteor-right" style={meteorStyles[1]}>
          <img src={meteor} alt="meteor" />
        </figure>
      </div>
    );
  }
}

export default Dashboard;
