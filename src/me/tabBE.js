import React from 'react';
import TagList from '../widgets/tag_list';
import { Progress } from 'antd';
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
      <TagList
        tags={[
          {
            name: 'Python',
            content:
              'Python is an interpreted high-level programming language for general-purpose programming.',
          },
          {
            name: 'Express.js',
            content: 'Express.js is a web application framework for Node.js.',
          },
          {
            name: 'Socket.IO',
            content: 'Socket.IO enables real-time bidirectional event-based communication.O',
          },
          {
            name: 'MongoDB',
            content:
              'MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need',
          },
        ]}
      />
    </div>
  </div>);

export default TabBE;
