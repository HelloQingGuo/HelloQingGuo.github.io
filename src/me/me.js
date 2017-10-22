import React, { Component } from 'react';
import { Row, Col, Card, Tabs, Progress, Tag } from 'antd';
import ReactEcharts from 'echarts-for-react';
// import 'echarts-wordcloud';
import 'font-awesome/css/font-awesome.css';

import ScrollToTopOnMount from '../widgets/scrollToTopOnMount';
import qing from '../assets/qing.jpg';
import github0 from '../assets/github0.svg';
import linkedin0 from '../assets/linkedin0.svg';
import email0 from '../assets/email0.svg';
import { config as config1, seriesData as seriesData1 } from './config1';
// import config2 from './config2';

import './me.css';

class Me extends Component {
  shouldComponentUpdate() {
    return false;
  }
  componentDidMount() {
    let currentIndex = 0;
    const maxDataLen = seriesData1.length;
    // execute once at the beginning
    this.chart = this.react_echart.getEchartsInstance();
    setTimeout(() => {
      this.chart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
    }, 0);
    this.timerOfFE = setInterval(() => {
      // Cancel highlighted current scatter
      this.chart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
      currentIndex = (currentIndex + 1) % maxDataLen;
      // Highlight current scatter
      this.chart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
      this.chart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
    }, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.timerOfFE);
  }

  render() {
    return (
      <div className="me">
        <ScrollToTopOnMount />
        <Row gutter={24}>
          <Col md={10} style={{ marginBottom: '24px' }}>
            <Card style={{ minHeight: '500px', textAlign: 'center', paddingTop: '35px' }}>
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
                <hr className="horizontal-divider" />
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
                <hr className="horizontal-divider" />
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
          <Col md={14} style={{ marginBottom: '24px' }}>
            <Card style={{ minHeight: '500px' }}>
              <h1 className="skill-set">Skill Proficiency</h1>
              <h3 className="skill-set-score">
                <span className="color-block familiar-color" />56 - 70 Familiar<hr className="vertical-divider" />
                <span className="color-block proficient-color" />71 - 85 Proficient<hr className="vertical-divider" />
                <span className="color-block master-color" />86 - 100 Master
              </h3>
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Front End" key="1">
                  <div className="frontend">
                    <ReactEcharts
                      ref={(e) => {
                        this.react_echart = e;
                      }}
                      option={config1}
                      notMerge
                      lazyUpdate={false}
                      onChartReady={this.onChartReadyCallback}
                      style={{ height: '300px' }}
                    />
                    <div className="tags">
                      <Tag color="#fc4343">ES 7</Tag>
                      <Tag color="#e043b7">Yarn</Tag>
                      <Tag color="#3085de">CSS Animations</Tag>
                    </div>
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Back End" key="2">
                  <div className="backend">
                    <div className="top">
                      <div>
                        <Progress
                          type="circle"
                          percent={65}
                          width={140}
                          format={() => 'Familiar'}
                        />
                        <h1>JAVA</h1>
                      </div>
                      <div>
                        <Progress type="circle" percent={50} width={140} />
                        <h1>SQL</h1>
                      </div>
                    </div>
                    <div className="tags">
                      <Tag color="#fc4343">Node.js</Tag>
                      <Tag color="#e043b7">Express.js</Tag>
                      <Tag color="#3085de">Socket.io</Tag>
                      <Tag color="#24e1dd">NoSQL (MongoDB)</Tag>
                    </div>
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="DevOps" key="3" />
                <Tabs.TabPane tab="DevTools" key="4" />
              </Tabs>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Me;
