import React, { Component } from 'react';
import { links } from '../../widgets/constants/links';
import Detail from '../../widgets/detail';

class Taxonomy extends Component {
  render() {
    return (
      <Detail projectDetail={links.find(link => link.name.toLowerCase() === 'taxonomy gui')} />
    );
  }
}

export default Taxonomy;
