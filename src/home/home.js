import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router-dom';
import './home.css';
import meteor from '../assets/meteor.svg';
import ReactVivus from '../widgets/react_vivus';
import hi from '../assets/hi.svg';
import svg from '../assets/spaceship.svg';
import github from '../assets/github.svg';
import githubColored from '../assets/github_colored.svg';
import linkedin from '../assets/linkedin.svg';
import linkedinColored from '../assets/linkedin_colored.svg';
import email from '../assets/email.svg';
import emailColored from '../assets/email_colored.svg';
import { setCurNav } from '../actions/action_ui';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      desc: '',
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
    const roles = ['Developer.', 'Graduate Student.', 'Good Chef !'];
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

  componentWillUnmount() {
    clearInterval(this.meteorTimer);
    clearInterval(this.backPrinterTimer);
    clearInterval(this.printerTimer);
  }

  render() {
    const { randomPosition, desc } = this.state;
    const { curNavId, navItemsForHome } = this.props;

    const meteorStyles = randomPosition.map(each => ({
      top: `${each.top}%`,
      transform: `rotate(${each.rotate}deg)`,
    }));
    return (
      <main className="home">
        <QueueAnim
          component="div"
          className="wrapper"
          key="wrapper"
          type="top"
          interval={50}
          ease="easeInSine"
          duration={850}
        >
          <QueueAnim
            component="div"
            className="container"
            key="container"
            type="top"
            interval={250}
            ease="easeInSine"
            duration={375}
          >
            <div className="logo">
              <ReactVivus
                id="logo"
                width="91px"
                height="122px"
                file={svg}
                animTimingFunction="EASE"
                type="oneByOne"
              />
            </div>
            <Row gutter={16} className="slogan" key="slogan">
              <Col md={11} className="slogan-left">
                <img className="hi" src={hi} alt="hi" />
              </Col>
              <Col md={13} className="slogan-right">
                <span className="default-desc">I&#39;M A</span> {desc}
                <span className="cursor" />
              </Col>
            </Row>
            <div className="navigation" key="navigation">
              {navItemsForHome.map(navItem =>
                (<Link
                  to={navItem.link}
                  className={navItem.id === curNavId ? 'curNav' : ''}
                  key={navItem.name}
                  onClick={() => this.props.setCurNav(navItem.id)}
                 >
                  {navItem.name}
                  <span className="linethrough" />
                </Link>),
              )}
              {/* <Link to="/dashboard/projects" onClick={() => setCurNav(2)}>
                PROJECT<span className="linethrough" />
                </Link>
                <Link to="/dashboard/me" onClick={() => setCurNav(1)}>
                ME<span className="linethrough" />
                </Link>
                <Link to="/dashboard/resume" onClick={() => setCurNav(3)}>
                RESUME<span className="linethrough" />
              </Link> */}
            </div>
          </QueueAnim>
          <div className="footer" key="footer">
            <a href="https://github.com/HelloQingGuo" target="_blank" rel="noopener noreferrer">
              <span className="github">
                <img src={github} alt="github" />
                {/* <img src={githubColored} alt="github" /> */}
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/helloqingguo/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="linkedin">
                <img src={linkedin} alt="linkedin" />
                {/* <img src={linkedinColored} alt="linkedin" /> */}
              </span>
            </a>
            <a href="mailto:guoqing1001@hotmail.com">
              <span className="email">
                <img src={email} alt="email" />
                {/* <img src={emailColored} alt="email" /> */}
              </span>
            </a>
          </div>
          <h4 className="footer-desc" key="footer-desc">
            Code with love by Qing Guo
          </h4>
          <div className="stars" />
          <div className="stars-lg" />
          <figure className="meteor" style={meteorStyles[0]}>
            <img src={meteor} alt="meteor" />
          </figure>
          <figure className="meteor-right" style={meteorStyles[1]}>
            <img src={meteor} alt="meteor" />
          </figure>
        </QueueAnim>
      </main>
    );
  }
}
function mapStateToProps(state) {
  return {
    curNavId: state.ui.curNavId,
    navItemsForHome: state.ui.navItemsForHome,
  };
}

Home.propTypes = {
  setCurNav: PropTypes.func.isRequired,
  curNavId: PropTypes.number.isRequired,
  navItemsForHome: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, { setCurNav })(Home);
