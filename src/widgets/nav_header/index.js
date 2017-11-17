import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { setCurNav } from '../../actions/action_ui';
import './index.css';

const NavHeader = props =>
  (<Menu
    selectedKeys={[props.curNavId.toString()]}
    mode="horizontal"
    className="nav-menu"
    onClick={({ key }) => props.setCurNav(Number(key))}
  >
    {props.navItems.map(navItem =>
      (<Menu.Item key={navItem.id}>
        <Link to={navItem.link}>
          {navItem.name}
        </Link>
      </Menu.Item>),
    )}
  </Menu>);

function mapStateToProps(state) {
  return {
    navItems: state.ui.navItems,
    curNavId: state.ui.curNavId,
  };
}

NavHeader.propTypes = {
  setCurNav: PropTypes.func.isRequired,
  curNavId: PropTypes.number.isRequired,
  navItems: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, { setCurNav })(NavHeader);
