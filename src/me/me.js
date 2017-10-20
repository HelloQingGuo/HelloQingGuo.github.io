import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import ReactEcharts from 'echarts-for-react';
// import 'echarts-wordcloud';
import 'font-awesome/css/font-awesome.css';

import ScrollToTopOnMount from '../widgets/scrollToTopOnMount';
import qing from '../assets/qing.jpg';
import github0 from '../assets/github0.svg';
import linkedin0 from '../assets/linkedin0.svg';
import email0 from '../assets/email0.svg';
import config1 from './config1';
import './me.css';

class Me extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div className="me">
        <ScrollToTopOnMount />
        <Row gutter={24}>
          <Col md={10}>
            <Card style={{ minHeight: '500px', textAlign: 'center', paddingTop: '50px' }}>
              <div className="profile">
                <img src={qing} alt="profile" className="profile-img" />
                <h1 className="name">Qing Guo</h1>
                <h3 className="headline">
                  Self-motivated front-end developer endeavouring to master full-stack skill set who
                  helps you visualize the data
                </h3>
                <a
                  href="http://www.quantworks.com/"
                  title="Quantworks, Inc"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="company"
                >
                  Quantworks, Inc
                </a>
                <h3 className="address">
                  <i className="fa fa-map-marker" aria-hidden="true" />Raleigh-Durham, North
                  Carolina Area
                </h3>
                <hr />
                <Row gutter={8} className="numbers">
                  <Col xs={12}>
                    <h1 className="monitorParamNum" style={{ color: '#FC4343' }}>
                      5
                    </h1>
                    <span className="monitorParamText">years coding exp</span>
                  </Col>
                  <Col xs={12}>
                    <h1 className="monitorParamNum" style={{ color: '#E043B7' }}>
                      4
                    </h1>
                    <span className="monitorParamText">on-going projects</span>
                  </Col>
                  <Col xs={12} style={{ marginTop: '0' }}>
                    <h1 className="monitorParamNum mt-10" style={{ color: '#3085DE' }}>
                      2
                    </h1>
                    <span className="monitorParamText">publications</span>
                  </Col>
                  <Col xs={12} style={{ marginTop: '0' }}>
                    <h1 className="monitorParamNum" style={{ color: '#24e1dd' }}>
                      2
                    </h1>
                    <span className="monitorParamText">certificates</span>
                  </Col>
                </Row>
                <hr />
                <div className="footer" key="footer">
                  <a
                    href="https://github.com/HelloQingGuo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="github">
                      <img src={github0} alt="github" />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/helloqingguo/?locale=en_US"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="linkedin">
                      <img src={linkedin0} alt="linkedin" />
                    </span>
                  </a>
                  <a href="mailto:guoqing1001@hotmail.com">
                    <span className="email">
                      <img src={email0} alt="email" />
                    </span>
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={14}>
            <Card style={{ minHeight: '500px' }}>
              <ReactEcharts
                option={config1}
                notMerge
                lazyUpdate={false}
                onChartReady={this.onChartReadyCallback}
                style={{ height: '300px' }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Me;
