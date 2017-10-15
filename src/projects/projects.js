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
        <ScrollOverPack playScale={['10vh', '90vh']} className="project" replay>
          <TweenOne
            key="youplea"
            animation={{ x: 0, opacity: 1, duration: 500 }}
            style={{ transform: 'translateX(100px)', opacity: 0 }}
          >
            <Link to="/dashboard/projects/youplea">Youplea</Link>
          </TweenOne>
        </ScrollOverPack>
        <ScrollOverPack playScale={['10vh', '90vh']} className="project" replay>
          <TweenOne
            key="hearful"
            animation={{ x: 0, opacity: 1, duration: 500 }}
            style={{ transform: 'translateX(100px)', opacity: 0 }}
          >
            <Link to="/dashboard/projects/hearful">Hearful</Link>
          </TweenOne>
        </ScrollOverPack>
        <ScrollOverPack playScale={['10vh', '90vh']} className="project" replay>
          <TweenOne
            key="fanalytical"
            animation={{ x: 0, opacity: 1, duration: 500 }}
            style={{ transform: 'translateX(100px)', opacity: 0 }}
          >
            <Link to="/dashboard/projects/fanalytical">Fanalytical</Link>
          </TweenOne>
        </ScrollOverPack>
        <ScrollOverPack playScale={['10vh', '90vh']} className="project" replay>
          <TweenOne
            key="taxonomy"
            animation={{ x: 0, opacity: 1, duration: 500 }}
            style={{ transform: 'translateX(100px)', opacity: 0 }}
          >
            <Link to="/dashboard/projects/taxonomy">Taxonomy</Link>
          </TweenOne>
        </ScrollOverPack>
      </div>
    );
  }
}

export default Projects;
