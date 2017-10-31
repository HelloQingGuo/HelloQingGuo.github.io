import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import ScrollToTopOnMount from '../../widgets/scrollToTopOnMount';
import NavHeader from '../../widgets/nav_header';
import './youplea.css';

const ScrollOverPack = ScrollAnim.OverPack;

class Youplea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ScrollToTopOnMount />
        <NavHeader />
        <div
          style={{
            marginTop: '62px',
            height: '1000px',
            backgroundColor: '#eee',
            textAlign: 'center',
          }}
        >
          <h1>Youplea</h1>
          {/* <ScrollOverPack id="page1" className="page1" replay playScale="30vh">
            <QueueAnim key="1">
              <div key="0" className="demo" />
              <div key="1" className="demo" style={{ backgroundColor: '#F38EAD' }} />
              <div key="2" className="demo" />
              <div key="3" className="demo" />
            </QueueAnim>
            <div style={{ backgroundColor: 'red', height: '100px' }} />
          </ScrollOverPack> */}
        </div>
      </div>
    );
  }
}

export default Youplea;
