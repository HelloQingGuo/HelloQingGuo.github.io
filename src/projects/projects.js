import React, { Component } from 'react';
import ScrollAnim from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import { Link } from 'react-router-dom';
import ScrollToTopOnMount from '../widgets/scrollToTopOnMount';
import './projects.css';

const ScrollOverPack = ScrollAnim.OverPack;

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <ScrollToTopOnMount />
        <ScrollOverPack playScale="50px">
          <TweenOne
            key="youplea"
            className="project"
            animation={{ y: 0, opacity: 1, duration: 600 }}
            style={{ transform: 'translateY(25px)', opacity: 0.25 }}
          >
            <Link to="/dashboard/projects/youplea" className="youplea">
              <img src="http://kyledecker.me/content/1-work/1-swiftype/preview.svg" alt="youplea" />
              <span className="desc">
                <h2>Youplea</h2>
                <span>Lorem Ipsum Lorem Ipsum Ipsum</span>
              </span>
            </Link>
          </TweenOne>
        </ScrollOverPack>
        <ScrollOverPack playScale="50px">
          <TweenOne
            key="hearful"
            className="project"
            animation={{ y: 0, opacity: 1, duration: 600 }}
            style={{ transform: 'translateY(25px)', opacity: 0.25 }}
          >
            <Link to="/dashboard/projects/hearful" className="hearful">
              <img src="http://kyledecker.me/content/1-work/2-wintr-mx/preview.svg" alt="hearful" />
              <span className="desc">
                <h2>Hearful</h2>
                <span>Lorem Ipsum Lorem Ipsum Ipsum</span>
              </span>
            </Link>
          </TweenOne>
        </ScrollOverPack>
        <ScrollOverPack playScale="50px">
          <TweenOne
            key="fanalytical"
            className="project"
            animation={{ y: 0, opacity: 1, duration: 600 }}
            style={{ transform: 'translateY(25px)', opacity: 0.25 }}
          >
            <Link to="/dashboard/projects/fanalytical" className="fanalytical">
              <img
                src="http://kyledecker.me/content/1-work/3-catnap/preview.svg"
                alt="fanalytical"
              />
              <span className="desc">
                <h2>fanalytical</h2>
                <span>Lorem Ipsum Lorem Ipsum Ipsum</span>
              </span>
            </Link>
          </TweenOne>
        </ScrollOverPack>
        <ScrollOverPack playScale="50px">
          <TweenOne
            key="taxonomy"
            className="project"
            animation={{ y: 0, opacity: 1, duration: 600 }}
            style={{ transform: 'translateY(25px)', opacity: 0.25 }}
          >
            <Link to="/dashboard/projects/taxonomy" className="taxonomy">
              <img src="http://kyledecker.me/content/1-work/4-misc/preview.svg" alt="taxonomy" />
              <span className="desc">
                <h2>taxonomy</h2>
                <span>Lorem Ipsum Lorem Ipsum Ipsum</span>
              </span>
            </Link>
          </TweenOne>
        </ScrollOverPack>
      </div>
    );
  }
}

export default Projects;
