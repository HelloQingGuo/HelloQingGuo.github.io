import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './index.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class NavHeader extends Component {
  render() {
    return (
      <Menu mode="horizontal" className="nav-menu">
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
      </Menu>
    );
  }
}

function mapStateToProps(state) {
  return {
    curNavHeaderIdx: state.ui.curNavHeaderIdx,
  };
}

NavHeader.propTypes = {
  navigate: PropTypes.func.isRequired,
  curNavHeaderIdx: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, {})(NavHeader);
