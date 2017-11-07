import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import ScrollToTopOnMount from '../../widgets/scrollToTopOnMount';
import NavHeader from '../../widgets/nav_header_2';
import './youplea.css';

const ScrollOverPack = ScrollAnim.OverPack;

class Youplea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="youplea">
        <ScrollToTopOnMount />
        <NavHeader />
        <div className="first-screen">
          <div className="logo-wrapper">
            <img src="http://kyledecker.me/content/1-work/1-swiftype/banner.svg" alt="logo" />
          </div>
          <h1 className="title">Youplea</h1>
        </div>
        <h1>sss</h1>
      </div>
    );
  }
}

export default Youplea;
