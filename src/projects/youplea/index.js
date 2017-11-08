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

class Youplea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="youplea">
        <ScrollToTopOnMount />
        <NavHeader />
        <QueueAnim
          component="div"
          className="first-screen"
          key="wrapper"
          type="bottom"
          ease="easeInSine"
          interval={100}
          duration={400}
        >
          <div className="logo-wrapper" key="logo">
            <img src={links[0].lg_source} alt="logo" />
          </div>
          <h1 className="title" key="title">
            YouPlea
          </h1>
          <h2 className="subtitle" key="subtitle">
            The Automated Adjudication Service
          </h2>
        </QueueAnim>
        <h1>sss</h1>
        <ArrowNav />
      </div>
    );
  }
}

export default Youplea;
