import React, { Component } from 'react';
import './home.css';
import meteor from '../assets/meteor.svg';
import hi from '../assets/hi.svg';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    setInterval(() => {
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
  }

  render() {
    const { randomPosition } = this.state;
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
            <h2 className="slogan">
              <span className="slogan-left">
                <img className="hi" src={hi} alt="hi" />
              </span>
              <span className="slogan-right">I AM A FRONT-END DEVELOPER</span>
              <span className="cursor" />
            </h2>
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
