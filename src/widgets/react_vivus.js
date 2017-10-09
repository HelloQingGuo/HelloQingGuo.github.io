import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Vivus from 'vivus';

class ReactVivus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {},
    };
  }

  componentDidMount() {
    const { file, callBack, duration, type, reverseStack, animTimingFunction } = this.props;
    new Vivus(this.props.id, { duration, file, type, reverseStack, animTimingFunction }, callBack);
  }

  render() {
    const { id, type, style, height, width, callback } = this.props;
    return <div id={id} style={Object.assign(style || {}, { height, width })} />;
  }
}

ReactVivus.defaultProps = {
  duration: 200,
  type: 'oneByOne',
  callback: null,
  animTimingFunction: Vivus.EASE_OUT_BOUNCE, // EASE, EASE_IN, EASE_OUT and EASE_OUT_BOUNCE
  reverseStack: false,
};

ReactVivus.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  callback: PropTypes.func,
  duration: PropTypes.number,
  type: PropTypes.string,
  reverseStack: PropTypes.string,
  animTimingFunction: PropTypes.func,
};

export default ReactVivus;
