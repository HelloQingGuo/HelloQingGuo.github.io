import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './home.css';
import meteor from '../assets/meteor.svg';
import hi from '../assets/hi.svg';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      desc: "I'm a ",
      counter: 0,
      randomPosition: [
        {
          top: 58,
          rotate: 45,
        },
        {
          top: 40,
          rotate: 211,
        },
      ],
    };
  }

  componentDidMount() {
    const roles = ['Front-end Developer', 'Graduate Student', 'Good Chef'];
    this.meteorTimer = setInterval(() => {
      const top = Math.floor(Math.random() * 101); // [0, 100]
      const rotate = Math.floor(Math.random() * 361); // [0, 360]
      const top2 = Math.floor(Math.random() * 101); // [0, 100]
      const rotate2 = Math.floor(Math.random() * 361); // [0, 360]
      this.setState({
        randomPosition: [
          {
            top,
            rotate,
          },
          {
            top: top2,
            rotate: rotate2,
          },
        ],
      });
    }, 2500);
    const initialFrozenCounterForForwarding = 7;
    const initialFrozenCounterForBacking = 10;
    let wordCounter = 0;
    let charCounter = 0;
    let frozenCounterForForwarding = initialFrozenCounterForForwarding;
    let frozenCounterForBacking = initialFrozenCounterForBacking;
    let goBack = false;
    this.backPrinterTimer = setInterval(() => {
      const { desc } = this.state;
      if (goBack && frozenCounterForBacking === initialFrozenCounterForBacking) {
        // backing mode, non frozen mode
        this.setState(
          {
            desc: desc.substring(0, desc.length - 1),
          },
          () => {
            charCounter -= 1;
            if (charCounter === -1) {
              frozenCounterForBacking -= 1; // let it into frozen mode;
            }
          },
        );
      } else if (goBack && frozenCounterForBacking !== initialFrozenCounterForBacking) {
        // backing mode, frozen mode
        if (frozenCounterForBacking === 0) {
          // frozen mode ends, switch to forwarding mode now
          frozenCounterForBacking = initialFrozenCounterForBacking;
          goBack = !goBack;
          wordCounter += 1;
          wordCounter = wordCounter === roles.length ? 0 : wordCounter;
          charCounter = 0;
        } else {
          frozenCounterForBacking -= 1;
        }
      }
    }, 75);
    this.printerTimer = setInterval(() => {
      const { desc } = this.state;
      const role = roles[wordCounter];
      if (!goBack && frozenCounterForForwarding === initialFrozenCounterForForwarding) {
        // forwarding mode, non-frozen mode
        this.setState(
          {
            desc: `${desc}${role.charAt(charCounter)}`,
          },
          () => {
            charCounter += 1;
            if (charCounter === role.length) {
              frozenCounterForForwarding -= 1; // let it into frozen mode;
            }
          },
        );
      } else if (!goBack && frozenCounterForForwarding !== initialFrozenCounterForForwarding) {
        // forwarding mode, frozen mode
        if (frozenCounterForForwarding === 0) {
          // frozen mode ends, switch to back mode now
          frozenCounterForForwarding = initialFrozenCounterForForwarding;
          goBack = !goBack;
          charCounter = role.length - 1;
        } else {
          frozenCounterForForwarding -= 1;
        }
      }
    }, 200);
  }

  componentWillUnMount() {
    clearInterval(this.meteorTimer);
    clearInterval(this.backPrinterTimer);
    clearInterval(this.printerTimer);
  }

  render() {
    const { randomPosition, desc } = this.state;
    const meteorStyles = randomPosition.map(each => ({
      top: `${each.top}%`,
      transform: `rotate(${each.rotate}deg)`,
    }));
    return (
      <main className="home">
        <div className="wrapper">
          <div className="container">
            <h2>
              <img src="http://via.placeholder.com/90x120" alt="logo" />
            </h2>
            <Row gutter={16} className="slogan">
              <Col md={12} className="slogan-left">
                <img className="hi" src={hi} alt="hi" />
              </Col>
              <Col md={12} className="slogan-right">
                {desc}
                <span className="cursor" />
              </Col>
            </Row>
          </div>
          <div className="stars" />
          <div className="stars-lg" />
          <figure className="meteor" style={meteorStyles[0]}>
            <img src={meteor} alt="meteor" />
          </figure>
          <figure className="meteor-right" style={meteorStyles[1]}>
            <img src={meteor} alt="meteor" />
          </figure>
        </div>
      </main>
    );
  }
}

export default Home;
