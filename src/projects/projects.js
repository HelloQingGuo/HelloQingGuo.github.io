import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () =>
  (<ul style={{ color: 'red' }}>
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
  </ul>);

export default Projects;
