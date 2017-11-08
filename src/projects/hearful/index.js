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

class Hearful extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hearful">
        <ScrollToTopOnMount />
        <NavHeader />
        <QueueAnim
          component="div"
          className="first-screen"
          key="wrapper"
          type="bottom"
          ease="easeInSine"
          interval={250}
          duration={550}
        >
          <div className="logo-wrapper" key="logo">
            <img src={links[1].lg_source} alt="logo" />
          </div>
          <h1 className="title" key="title">
            Hearful
          </h1>
          <h2 className="subtitle" key="subtitle">
            Customer Feedback Analytics
          </h2>
        </QueueAnim>
        <h1>sss</h1>
        <ArrowNav />
      </div>
    );
  }
}

export default Hearful;
