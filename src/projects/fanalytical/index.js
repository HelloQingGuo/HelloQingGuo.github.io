import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import ScrollToTopOnMount from '../../widgets/scrollToTopOnMount';
import NavHeader from '../../widgets/nav_header_2';
import './index.css';
import { links } from '../../widgets/constants/links';
import ArrowNav from '../../widgets/arrow_nav';

const ScrollOverPack = ScrollAnim.OverPack;

class Fanalytical extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fanalytical">
        <ScrollToTopOnMount />
        <NavHeader />
        <div className="first-screen">
          <div className="logo-wrapper">
            <img src={links[2].lg_source} alt="logo" />
          </div>
          <h1 className="title">Fanalytical</h1>
        </div>
        <h1>sss</h1>
        <ArrowNav />
      </div>
    );
  }
}

export default Fanalytical;
