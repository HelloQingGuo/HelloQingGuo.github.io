import React, { Component } from 'react';
import ScrollToTopOnMount from '../../widgets/scrollToTopOnMount';
import NavHeader from '../../widgets/nav_header';

class Hearful extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ScrollToTopOnMount />
        <NavHeader />
        <div
          style={{
            marginTop: '62px',
            height: '1000px',
            backgroundColor: '#eee',
            textAlign: 'center',
          }}
        >
          <h1>Hearful</h1>
        </div>
      </div>
    );
  }
}

export default Hearful;