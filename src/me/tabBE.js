import React from 'react';
import { Tag, Progress, Tooltip } from 'antd';
import { identifyProficiency, scoreMapping } from './util';
import './me.css';

const TabBE = ({ skills }) =>
  (<div className="backend">
    <div className="top">
      {skills.map((skill) => {
        const skillProficiency = identifyProficiency(skill.value, scoreMapping);
        return (
          <div key={skill.name}>
            <Progress
              type="circle"
              percent={skill.value}
              width={140}
              format={() =>
                (<div>
                  <h4 className="progress-text">
                    {skillProficiency.level}
                  </h4>
                  <h5 className="progress-value">
                    {skill.value}
                  </h5>
                </div>)}
            />
            <h1>
              {skill.name}
            </h1>
          </div>
        );
      })}
    </div>
    <div className="tags">
      <Tooltip title="Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side.">
        <Tag color="#fc4343">Node.js</Tag>
      </Tooltip>
      <Tooltip title="Express.js is a web application framework for Node.js.">
        <Tag color="#e043b7">Express.js</Tag>
      </Tooltip>
      <Tooltip title="Socket.IO enables real-time bidirectional event-based communication.">
        <Tag color="#3085de">Socket.IO</Tag>
      </Tooltip>
      <Tooltip title="MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need">
        <Tag color="#24e1dd">MongoDB</Tag>
      </Tooltip>
    </div>
  </div>);

export default TabBE;
