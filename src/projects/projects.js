import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ScrollAnim from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import { Link } from 'react-router-dom';
import { links as navItems } from '../widgets/nav_header/links';
import { setCurNavHeaderIdx } from '../actions/action_ui';
import ScrollToTopOnMount from '../widgets/scrollToTopOnMount';
import './projects.css';

const ScrollOverPack = ScrollAnim.OverPack;

class Projects extends Component {
  handleClickOnProject(idx) {
    console.log('idx', idx);
    this.props.setCurNavHeaderIdx(idx);
  }

  render() {
    const projectList = navItems.map((project, idx) =>
      (<ScrollOverPack key={project.name} playScale="50px">
        <TweenOne
          key={project.name}
          className="project"
          animation={{ y: 0, opacity: 1, duration: 600 }}
          style={{ transform: 'translateY(25px)', opacity: 0.25 }}
        >
          <Link
            to={project.link}
            className={project.name}
            onClick={() => this.props.setCurNavHeaderIdx(idx)}
          >
            <img src={project.source} alt={project.name} />
            <span className="desc">
              <h2>
                {project.name}
              </h2>
              <span>
                {project.desc}
              </span>
            </span>
          </Link>
        </TweenOne>
      </ScrollOverPack>),
    );
    return (
      <div className="projects">
        <ScrollToTopOnMount />
        {projectList}
        {/* <ScrollOverPack playScale="50px">
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
        </ScrollOverPack> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    curNavHeaderIdx: state.ui.curNavHeaderIdx,
  };
}

Projects.propTypes = {
  setCurNavHeaderIdx: PropTypes.func.isRequired,
  curNavHeaderIdx: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, { setCurNavHeaderIdx })(Projects);
