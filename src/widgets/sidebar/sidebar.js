import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
import logo from '../../assets/logo.svg';
import './sidebar.css';

class Sidebar extends Component {
  render() {
    const { curNav, navItems, setCurNav, handleClickOnNavbutton } = this.props;
    return (
      <div className="sidebar">
        <img src={logo} alt="logo" className="logo" />
        <QueueAnim
          component="ul"
          className="navlist"
          type="right"
          interval={50}
          duration={90}
          ease="easeInSine"
        >
          {navItems.map(navItem =>
            (<li
              key={navItem.name}
              className={navItem.id === curNav ? 'curNav' : ''}
              onClick={() => setCurNav(navItem.id)}
            >
              <Link to={navItem.num}>
                {navItem.name}
                <span className="linethrough" />
              </Link>
            </li>),
          )}
        </QueueAnim>
      </div>
    );
  }
}

export default Sidebar;
