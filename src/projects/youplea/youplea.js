import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import ScrollToTopOnMount from '../../widgets/scrollToTopOnMount';
import './youplea.css';

const ScrollOverPack = ScrollAnim.OverPack;

class Youplea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h3 style={{ color: 'red', height: '2000px' }}>
        <ScrollToTopOnMount />Youplea
        <div style={{ backgroundColor: 'red', height: '1000px' }} />
        <ScrollOverPack id="page1" className="page1" replay playScale="30vh">
          <QueueAnim key="1">
            <div key="0" className="demo" />
            <div key="1" className="demo" style={{ backgroundColor: '#F38EAD' }} />
            <div key="2" className="demo" />
            <div key="3" className="demo" />
          </QueueAnim>
          <div style={{ backgroundColor: 'red', height: '100px' }} />
        </ScrollOverPack>
      </h3>
    );
  }
}

export default Youplea;
