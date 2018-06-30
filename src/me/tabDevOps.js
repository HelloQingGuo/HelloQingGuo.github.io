import React from 'react';
import { Progress } from 'antd';
import TagList from '../widgets/tag_list';
import { identifyProficiency, scoreMapping } from './util';
import './me.css';

const TabDevOps = ({ skills }) =>
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
            name: 'Docker',
            content:
              'Docker is an open platform for developers and sysadmins to build, ship, and run distributed applications, whether on laptops, data center VMs, or the cloud.',
          },
        ]}
      />
    </div>
  </div>);

export default TabDevOps;
