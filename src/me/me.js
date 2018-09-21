import React, { Component } from "react";
import { Row, Col, Card, Tabs, Tooltip, Icon } from "antd";
import Gallery from "react-photo-gallery";

import TabFE from "./tabFE";
import TabBE from "./tabBE";
import TabDevOps from "./tabDevOps";
import TabDevTools from "./tabDevTools";
import Profile from "./profile";
import Timeline from "./timeline";
import ScrollToTopOnMount from "../widgets/scrollToTopOnMount";
import photo_set from "./photo_set";
import "./me.css";

class Me extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="me">
        <ScrollToTopOnMount />
        <Row gutter={24}>
          <Col xl={10} style={{ marginBottom: "24px" }} key="a">
            <Card
              style={{
                minHeight: "543px",
                textAlign: "center",
                paddingTop: "35px"
              }}
            >
              <Profile />
            </Card>
          </Col>
          <Col xl={14} style={{ marginBottom: "24px" }} key="b">
            <Card style={{ minHeight: "543px", overflow: "hidden" }}>
              <h1 className="skill-set">Skill Proficiency</h1>
              <h3 className="skill-set-score">
                <Tooltip
                  placement="top"
                  title="Familiarity implies a modest amount of experience."
                >
                  56 - 70 Familiar&nbsp;&nbsp;
                  <Icon
                    type="question-circle-o"
                    size="small"
                    style={{ color: "#08c" }}
                  />
                </Tooltip>
                <hr className="vertical-divider" />
                <Tooltip
                  placement="top"
                  title="Proficiency implies a sufficient level of expertise, to the point where the individual is trusted to do some sort of task."
                >
                  71 - 85 Proficient&nbsp;&nbsp;
                  <Icon
                    type="question-circle-o"
                    size="small"
                    style={{ color: "#08c" }}
                  />
                </Tooltip>
                <hr className="vertical-divider" />
                <Tooltip
                  placement="top"
                  title="Mastery implies a level of expertise beyond proficiency."
                >
                  86 - 100 Master&nbsp;&nbsp;
                  <Icon
                    type="question-circle-o"
                    size="small"
                    style={{ color: "#08c" }}
                  />
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
                        name: "JAVA",
                        value: 71
                      },
                      {
                        name: "SQL",
                        value: 65
                      }
                    ]}
                  />
                </Tabs.TabPane>
                <Tabs.TabPane tab="DevOps" key="3">
                  <TabDevOps
                    skills={[
                      {
                        name: "AWS",
                        value: 60
                      },
                      {
                        name: "CI/CD",
                        value: 66
                      }
                    ]}
                  />
                </Tabs.TabPane>
                <Tabs.TabPane tab="DevTools" key="4">
                  <TabDevTools />
                </Tabs.TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col span={24} style={{ marginBottom: "24px" }} key="c">
            <Card>
              <Timeline />
            </Card>
          </Col>
          <Col span={24} style={{ marginBottom: "24px" }} key="d">
            <Card bodyStyle={{ padding: 0 }}>
              <div className="custom-card">
                <h1 className="beyond-the-work-title">Beyond The Work</h1>
                <p>
                  My name is Qing Guo, grew up in China, but currently living in
                  Raleigh - Durham area.
                </p>
                <p>In my free time I like to cook, read, and code.</p>
                <p>
                  {" "}
                  Chinese food is my favorite and nothing beats the poached
                  sliced beef in hot chili oil with a bowl of Jasmine rice.
                </p>
                <p>The following pictures are all my cookings !</p>
              </div>
              <Gallery photos={photo_set} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Me;
