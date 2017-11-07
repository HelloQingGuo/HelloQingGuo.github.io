import React from 'react';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import './index.css';

const NavHeader = () =>
  (<Menu mode="horizontal" className="nav-menu">
    <Menu.Item key="Home">
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="Projects">
      <Link to="/dashboard/projects/">Projects</Link>
    </Menu.Item>
    <Menu.Item key="Me">
      <Link to="/dashboard/Me/">Me</Link>
    </Menu.Item>
    <Menu.Item key="Resume">
      <Link to="/dashboard/resume/">Resume</Link>
    </Menu.Item>
  </Menu>);

NavHeader.propTypes = {};

export default NavHeader;
