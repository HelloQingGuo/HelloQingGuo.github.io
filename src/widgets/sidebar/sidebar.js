import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
import logo from '../../assets/logo.svg';
import './sidebar.css';

class Sidebar extends Component {
  render() {
    const { curNav, navItems, setCurNav, handleClickOnNavbutton } = this.props;
    return (
      <QueueAnim
        component="div"
        className="sidebar"
        type="right"
        interval={25}
        duration={200}
        ease="easeInSine"
      >
        <img src={logo} alt="logo" className="logo" key="logo" />
        <ul className="navlist" key="navList">
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
        </ul>
      </QueueAnim>
    );
  }
}

export default Sidebar;
