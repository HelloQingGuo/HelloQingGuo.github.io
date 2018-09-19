import React from "react";
import { Steps } from "antd";
import "./me.css";
import "font-awesome/css/font-awesome.css";
import cool from "../assets/cool.svg";

const Step = Steps.Step;

const Timeline = props => (
  <div className="timeline">
    <h1 className="timeline-name">My Experiences</h1>
    <Steps current={5} direction="vertical" size="small">
      <Step
        title={<span className="timeline-title">2010 - 2014</span>}
        description={
          <span className="timeline-desc">
            Communication Engineering Undergraduate at Beijing University of
            Chemical Technology
          </span>
        }
        icon={<i className="fa fa-star-cap" aria-hidden="true" />}
      />
      <Step
        title={<span className="timeline-title">2014 - 2015</span>}
        description={
          <span className="timeline-desc">
            Software Engineer at Digital China
          </span>
        }
        icon={<i className="fa fa-code" aria-hidden="true" />}
      />
      <Step
        title={<span className="timeline-title">2015 - 2017</span>}
        description={
          <span className="timeline-desc">
            Electrical and Computer Engineering Graduate at Duke University
          </span>
        }
        icon={<i className="fa fa-graduation-cap" aria-hidden="true" />}
      />
      <Step
        title={<span className="timeline-title">2016 - 2017</span>}
        description={
          <span className="timeline-desc">
            Front End Software Intern at Quantworks, Inc
          </span>
        }
        icon={<i className="fa fa-code" aria-hidden="true" />}
      />
      <Step
        title={<span className="timeline-title">2017 - Now</span>}
        description={
          <span className="timeline-desc">
            Senior Developer at Quantworks, Inc
          </span>
        }
        icon={<i className="fa fa-code" aria-hidden="true" />}
      />
      <Step
        title={<span className="timeline-title">Now - Near Future</span>}
        description={<span className="timeline-desc">Full Stack Engineer</span>}
        icon={<img src={cool} width="20px" alt="cool" />}
      />
    </Steps>
  </div>
);

export default Timeline;
