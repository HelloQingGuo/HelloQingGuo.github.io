import React, { Component } from 'react';
import { Row, Col, Card, Tabs, Tooltip, Icon } from 'antd';
// import ReactEcharts from 'echarts-for-react';
// import 'echarts-wordcloud';
import 'font-awesome/css/font-awesome.css';
import TabFE from './tabFE';
import TabBE from './tabBE';
import TabDevTools from './tabDevTools';
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
            <Card style={{ minHeight: '500px', overflow: 'hidden' }}>
              <h1 className="skill-set">Skill Proficiency</h1>
              <h3 className="skill-set-score">
                {/* <span className="color-block familiar-color" /> */}
                {/* <span className="color-block proficient-color" /> */}
                {/* <span className="color-block master-color" /> */}
                <Tooltip placement="top" title="Familiarity implies a modest amount of experience.">
                  56 - 70 Familiar&nbsp;&nbsp;
                  <Icon type="question-circle-o" size="small" style={{ color: '#08c' }} />
                </Tooltip>
                <hr className="vertical-divider" />
                <Tooltip
                  placement="top"
                  title="Proficiency implies a sufficient level of expertise, to the point where the individual is trusted to do some sort of task."
                >
                  71 - 85 Proficient&nbsp;&nbsp;
                  <Icon type="question-circle-o" size="small" style={{ color: '#08c' }} />
                </Tooltip>
                <hr className="vertical-divider" />
                <Tooltip
                  placement="top"
                  title="Mastery implies a level of expertise beyond proficiency."
                >
                  86 - 100 Master&nbsp;&nbsp;
                  <Icon type="question-circle-o" size="small" style={{ color: '#08c' }} />
                </Tooltip>
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
                <Tabs.TabPane tab="DevTools" key="4">
                  <TabDevTools />
                </Tabs.TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Me;
