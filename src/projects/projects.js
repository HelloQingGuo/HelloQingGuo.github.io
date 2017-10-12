import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <ul>
          <li>
            <Link to="/dashboard/projects/youplea">Youplea</Link>
          </li>
          <li>
            <Link to="/dashboard/projects/hearful">Hearful</Link>
          </li>
          <li>
            <Link to="/dashboard/projects/fanalytical">Fanalytical</Link>
          </li>
          <li>
            <Link to="/dashboard/projects/taxonomy">Taxonomy</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Projects;
