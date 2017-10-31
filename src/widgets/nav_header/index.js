import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import { links as navItems } from './links';
import { navigate } from '../../actions/action_ui';
import './index.css';

const getIdx = (direction, curIdx, totalCount) => {
  if (curIdx === 0 && direction === -1) {
    return totalCount - 1;
  }
  if (curIdx === totalCount - 1 && direction === 1) {
    return 0;
  }
  return curIdx + direction;
};

class NavHeader extends Component {
  constructor(props) {
    super(props);

    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
  }

  handleClickLeft() {
    this.props.navigate(-1, this.props.curNavHeaderIdx, navItems);
  }

  handleClickRight() {
    this.props.navigate(1, this.props.curNavHeaderIdx, navItems);
  }

  render() {
    const { curNavHeaderIdx } = this.props;
    return (
      <div className="navheader">
        <div className="counter">
          {curNavHeaderIdx + 1} of {navItems.length}
        </div>
        <div className="arrows">
          <Link to={navItems[getIdx(-1, curNavHeaderIdx, navItems.length)].link}>
            <Icon type="arrow-left" className="left" onClick={this.handleClickLeft} />
          </Link>
          <Link to={navItems[getIdx(1, curNavHeaderIdx, navItems.length)].link}>
            <Icon type="arrow-right" className="right" onClick={this.handleClickRight} />
          </Link>
        </div>
      </div>
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

export default connect(mapStateToProps, { navigate })(NavHeader);
