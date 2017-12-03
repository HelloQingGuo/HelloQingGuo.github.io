import React, { Component } from 'react';
import { Row, Col, Card, Tabs, Tooltip, Icon } from 'antd';
// import QueueAnim from 'rc-queue-anim';
// import ReactEcharts from 'echarts-for-react';
// import 'echarts-wordcloud';
import Gallery from 'react-photo-gallery';
import 'font-awesome/css/font-awesome.css';
import TabFE from './tabFE';
import TabBE from './tabBE';
import TabDevOps from './tabDevOps';
import TabDevTools from './tabDevTools';
import Profile from './profile';
import Timeline from './timeline';
import ScrollToTopOnMount from '../widgets/scrollToTopOnMount';
// import config2 from './config2';
import dish1 from '../assets/cooking/1.jpg';
import dish2 from '../assets/cooking/2.jpg';
import dish3 from '../assets/cooking/3.jpg';
import dish4 from '../assets/cooking/4.jpg';
import dish5 from '../assets/cooking/5.jpg';
import dish6 from '../assets/cooking/6.jpg';
import dish7 from '../assets/cooking/7.jpg';
import dish8 from '../assets/cooking/8.jpg';
import dish9 from '../assets/cooking/9.jpg';
import dish10 from '../assets/cooking/10.jpg';
import dish11 from '../assets/cooking/11.jpg';

import './me.css';

class Me extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const PHOTO_SET = [
      {
        src: dish1,
        width: 1,
        height: 1,
      },
      {
        src: dish2,
        width: 640,
        height: 852,
      },
      {
        src: dish3,
        width: 1,
        height: 1,
      },
      {
        src: dish4,
        width: 1,
        height: 1,
      },
      {
        src: dish5,
        width: 1,
        height: 1,
      },
      {
        src: dish6,
        width: 1440,
        height: 1080,
      },
      {
        src: dish7,
        width: 1440,
        height: 1080,
      },
      {
        src: dish8,
        width: 1084,
        height: 1079,
      },
      {
        src: dish9,
        width: 1440,
        height: 1080,
      },
      {
        src: dish10,
        width: 1440,
        height: 1080,
      },
      {
        src: dish11,
        width: 1,
        height: 1,
      },
    ];
    return (
      <div className="me">
        <ScrollToTopOnMount />
        <Row gutter={24}>
          <Col md={10} style={{ marginBottom: '24px' }} key="a">
            <Card style={{ minHeight: '500px', textAlign: 'center', paddingTop: '35px' }}>
              <Profile />
            </Card>
          </Col>
          <Col md={14} style={{ marginBottom: '24px' }} key="b">
            <Card style={{ minHeight: '500px', overflow: 'hidden' }}>
              <h1 className="skill-set">Skill Proficiency</h1>
              <h3 className="skill-set-score">
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
                <Tabs.TabPane tab="DevOps" key="3">
                  <TabDevOps
                    skills={[
                      {
                        name: 'AWS',
                        value: 60,
                      },
                      {
                        name: 'Heroku',
                        value: 66,
                      },
                    ]}
                  />
                </Tabs.TabPane>
                <Tabs.TabPane tab="DevTools" key="4">
                  <TabDevTools />
                </Tabs.TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col md={24} style={{ marginBottom: '24px' }} key="c">
            <Card>
              <Timeline />
            </Card>
          </Col>
          <Col md={24} style={{ marginBottom: '24px' }} key="d">
            <Card bodyStyle={{ padding: 0 }}>
              <div className="custom-card">
                <h1 className="beyond-the-work-title">Beyond The Work</h1>
                <p>
                  My name is Qing Guo, grew up in China, but currently living in Raleigh - Durham
                  area.
                </p>
                <p>In my free time I like to cook, read, and code.</p>
                <p>
                  {' '}Chinese food is my favorite and nothing beats the poached sliced beef in hot
                  chili oil with a bowl of Jasmine rice.
                </p>
                <p>The following pictures are all my cookings !</p>
              </div>
              <Gallery photos={PHOTO_SET} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Me;
