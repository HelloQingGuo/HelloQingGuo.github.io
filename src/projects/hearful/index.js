import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { links } from '../../widgets/constants/links';
import Detail from '../../widgets/detail';

class Hearful extends Component {
  render() {
    return <Detail projectDetail={links.find(link => link.name.toLowerCase() === 'hearful')} />;
  }
}

export default Hearful;
