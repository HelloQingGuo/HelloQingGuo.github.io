import React, { Component } from 'react';
import { links } from '../../widgets/constants/links';
import Detail from '../../widgets/detail';

class Youplea extends Component {
  render() {
    return <Detail projectDetail={links.find(link => link.name.toLowerCase() === 'youplea')} />;
  }
}

export default Youplea;
