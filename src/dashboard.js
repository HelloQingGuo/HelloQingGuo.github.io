import React from 'react';
import { Route } from 'react-router-dom';
import Me from './me/me';
import Projects from './projects/projects';
import Resume from './resume/resume';

const Dashboard = props =>
  (<div style={{ display: 'flex' }}>
    <div style={{ width: '300px' }}>
      <h1 style={{ color: 'red' }}>Sidebar</h1>
    </div>
    <div style={{ width: '100%' }}>
      {' '}<Route path="/dashboard/projects" component={Projects} />
      <Route path="/dashboard/me" component={Me} />
      <Route path="/dashboard/resume" component={Resume} />
    </div>
  </div>);

export default Dashboard;
