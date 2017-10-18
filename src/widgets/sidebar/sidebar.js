import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
import { setCurNav } from '../../actions/action_ui';
import logo from '../../assets/logo.svg';
import './sidebar.css';

class Sidebar extends Component {
  render() {
    const { curNavId, navItems, setCurNav } = this.props;
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
            (<li key={navItem.name}>
              <Link
                to={navItem.link}
                onClick={() => setCurNav(navItem.id)}
                className={navItem.id === curNavId ? 'curNav' : ''}
              >
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

function mapStateToProps(state) {
  return {
    curNavId: state.ui.curNavId,
    navItems: state.ui.navItems,
  };
}

Sidebar.propTypes = {
  setCurNav: PropTypes.func.isRequired,
  curNavId: PropTypes.number.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, { setCurNav })(Sidebar);
