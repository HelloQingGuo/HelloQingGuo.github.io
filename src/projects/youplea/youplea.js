import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTopOnMount from '../../widgets/scrollToTopOnMount';

const Youplea = () => [
  <h3 style={{ color: 'red', height: '2000px' }}>
    <ScrollToTopOnMount />Youplea
  </h3>,
  <Link to="/dashboard/projects/taxonomy">Taxonomy</Link>,
];

export default Youplea;
