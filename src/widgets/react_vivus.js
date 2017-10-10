import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Vivus from 'vivus';

class ReactVivus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      builtInAnimTimingFunction: {
        EASE: Vivus.EASE,
        EASE_IN: Vivus.EASE_IN,
        EASE_OUT: Vivus.EASE_OUT,
        EASE_OUT_BOUNCE: Vivus.EASE_OUT_BOUNCE,
      },
    };
  }

  componentDidMount() {
    const { file, callBack, duration, type, reverseStack, animTimingFunction } = this.props;
    const { builtInAnimTimingFunction } = this.state;
    new Vivus(
      this.props.id,
      {
        duration,
        file,
        type,
        reverseStack,
        animTimingFunction: builtInAnimTimingFunction[animTimingFunction],
      },
      callBack,
    );
  }

  render() {
    const { id, style, height, width, className } = this.props;
    return (
      <div
        id={id}
        className={className}
        style={Object.assign(style || {}, { height, width })}
        type
      />
    );
  }
}

ReactVivus.defaultProps = {
  duration: 200,
  type: 'delayed',
  callback: null,
  animTimingFunction: 'EASE', // EASE, EASE_IN, EASE_OUT and EASE_OUT_BOUNCE
  reverseStack: false,
  className: '',
};

ReactVivus.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  callback: PropTypes.func,
  duration: PropTypes.number,
  className: PropTypes.string,
  type: PropTypes.string,
  reverseStack: PropTypes.bool,
  animTimingFunction: PropTypes.string,
};

export default ReactVivus;
