import React from 'react';
import { Tag, Progress } from 'antd';
import { identifyProficiency, scoreMapping } from './util';
import './me.css';

// const identifyProficiency = (score, mapping) => {
//   for (let i = 0; i < mapping.length; i += 1) {
//     if (score >= mapping[i].scoreRange[0] && score <= mapping[i].scoreRange[1]) {
//       return mapping[i];
//     }
//   }
//   return null;
// };

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
              format={() => skillProficiency.level}
            />
            <h1>
              {skill.name}
            </h1>
          </div>
        );
      })}
    </div>
    <div className="tags">
      <Tag color="#fc4343">Node.js</Tag>
      <Tag color="#e043b7">Express.js</Tag>
      <Tag color="#3085de">Socket.io</Tag>
      <Tag color="#24e1dd">NoSQL (MongoDB)</Tag>
    </div>
  </div>);

export default TabBE;
