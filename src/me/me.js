import React, { Component } from 'react';
import { Row, Col, Card, Tabs } from 'antd';
// import ReactEcharts from 'echarts-for-react';
// import 'echarts-wordcloud';
import 'font-awesome/css/font-awesome.css';
import TabFE from './tabFE';
import TabBE from './tabBE';
import Profile from './profile';
import ScrollToTopOnMount from '../widgets/scrollToTopOnMount';
// import config2 from './config2';

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
          <Col md={10} style={{ marginBottom: '24px' }}>
            <Card style={{ minHeight: '500px', textAlign: 'center', paddingTop: '35px' }}>
              <Profile />
            </Card>
          </Col>
          <Col md={14} style={{ marginBottom: '24px' }}>
            <Card style={{ minHeight: '500px' }}>
              <h1 className="skill-set">Skill Proficiency</h1>
              <h3 className="skill-set-score">
                {/* <span className="color-block familiar-color" /> */}56 - 70 Familiar<hr className="vertical-divider" />
                {/* <span className="color-block proficient-color" /> */}71 - 85 Proficient<hr className="vertical-divider" />
                {/* <span className="color-block master-color" /> */}86 - 100 Master
              </h3>
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Front End" key="1">
                  <TabFE />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Back End" key="2">
                  <TabBE
                    skills={[
                      {
                        name: 'JAVA',
                        value: 71,
                      },
                      {
                        name: 'SQL',
                        value: 65,
                      },
                    ]}
                  />
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
