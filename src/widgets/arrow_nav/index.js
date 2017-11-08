import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Popover } from 'antd';
import { Link } from 'react-router-dom';
import { links as navItems } from '../constants/links';
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

class ArrowNav extends Component {
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
      <div className="arrow-nav">
        <Link to={navItems[getIdx(-1, curNavHeaderIdx, navItems.length)].link}>
          <Popover
            placement="left"
            content={navItems[getIdx(-1, curNavHeaderIdx, navItems.length)].name}
            trigger="hover"
          >
            <Button
              shape="circle"
              size="large"
              icon="left"
              className="arrow left-arrow"
              onClick={this.handleClickLeft}
            />
          </Popover>
        </Link>

        <Link to={navItems[getIdx(1, curNavHeaderIdx, navItems.length)].link}>
          <Popover
            placement="right"
            content={navItems[getIdx(1, curNavHeaderIdx, navItems.length)].name}
            trigger="hover"
          >
            <Button
              shape="circle"
              size="large"
              icon="right"
              className="arrow right-arrow"
              onClick={this.handleClickRight}
            />
          </Popover>
        </Link>
      </div>
    );
  }
}

ArrowNav.contextTypes = {
  router: PropTypes.object,
};

ArrowNav.propTypes = {
  navigate: PropTypes.func.isRequired,
  curNavHeaderIdx: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    curNavHeaderIdx: state.ui.curNavHeaderIdx,
  };
}

export default connect(mapStateToProps, { navigate })(ArrowNav);
