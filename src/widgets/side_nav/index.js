import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { setCurNav, showBG } from '../../actions/action_ui';
import './side_nav.css';

class SideNav extends Component {
  constructor(props) {
    super(props);

    this.handleClickOnNavButton = this.handleClickOnNavButton.bind(this);
  }

  handleClickOnNavButton() {
    this.props.showBG(!this.props.bgShown);
  }

  handleClickOnNavItem(navItemId) {
    this.props.setCurNav(navItemId);
    this.props.showBG(false);
  }

  render() {
    const { bgShown, curNavId, navItems } = this.props;
    return (
      <div className="sidenav">
        <Button
          shape="circle"
          icon="bars"
          size="large"
          type="primary"
          className="navbutton"
          style={bgShown ? { color: '#444', boxShadow: '2px 2px 6px #d3d3d3' } : { color: '#fff' }}
          onClick={this.handleClickOnNavButton}
        />
        <div className={bgShown ? 'bgcover shown' : 'bgcover'}>
          {bgShown
            ? <QueueAnim
              component="ul"
              className="navlist"
              type="right"
              interval={50}
              duration={90}
              ease="easeInSine"
            >
              {navItems.map(navItem =>
                (<li className={navItem.id === curNavId ? 'curNav' : ''} key={navItem.name}>
                  <Link to={navItem.link} onClick={() => this.handleClickOnNavItem(navItem.id)}>
                    {navItem.name}
                  </Link>
                </li>),
              )}
            </QueueAnim>
            : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bgShown: state.ui.bgShown,
    curNavId: state.ui.curNavId,
    navItems: state.ui.navItems,
  };
}

SideNav.propTypes = {
  showBG: PropTypes.func.isRequired,
  setCurNav: PropTypes.func.isRequired,
  curNavId: PropTypes.number.isRequired,
  bgShown: PropTypes.bool.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, { setCurNav, showBG })(SideNav);
