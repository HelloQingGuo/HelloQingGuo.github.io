import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { setCurNav } from '../../actions/action_ui';
import './index.css';

class NavHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true,
    };

    this.handleWindowScroll = this.handleWindowScroll.bind(this);
  }

  handleWindowScroll() {
    const isTop = window.scrollY < 100;
    // avoid the overkill of updating the state on each scroll.
    // Only update it when the it hits the breakpoint. (100px)
    if (isTop !== this.state.isTop) {
      this.setState({ isTop });
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleWindowScroll);
  }

  render() {
    return (
      <Menu
        selectedKeys={[this.props.curNavId.toString()]}
        mode="horizontal"
        className={`nav-menu ${!this.state.isTop && 'active'}`}
        onClick={({ key }) => this.props.setCurNav(Number(key))}
      >
        {this.props.navItems.map(navItem =>
          (<Menu.Item key={navItem.id}>
            <Link to={navItem.link}>
              {navItem.name}
            </Link>
          </Menu.Item>),
        )}
      </Menu>
    );
  }
}

function mapStateToProps(state) {
  return {
    navItems: state.ui.navItems,
    curNavId: state.ui.curNavId,
  };
}

NavHeader.propTypes = {
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

export default connect(mapStateToProps, { setCurNav })(NavHeader);
