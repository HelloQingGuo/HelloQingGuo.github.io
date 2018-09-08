import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ScrollAnim from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import { Link } from "react-router-dom";
import { links as navItems } from "../widgets/constants/links";
import { setCurNavHeaderIdx } from "../actions/action_ui";
import ScrollToTopOnMount from "../widgets/scrollToTopOnMount";
import "./projects.css";

const ScrollOverPack = ScrollAnim.OverPack;

class Projects extends Component {
  render() {
    const projectList = navItems.map((project, idx) => (
      <ScrollOverPack key={project.name} playScale="50px">
        <TweenOne
          key={project.name}
          className="project"
          animation={{ y: 0, opacity: 1, duration: 600 }}
          style={{ transform: "translateY(25px)", opacity: 0.25 }}
        >
          <Link
            to={project.link}
            className={`${project.name.toLowerCase()} link`}
            onClick={() => this.props.setCurNavHeaderIdx(idx)}
          >
            <img src={project.source} alt={project.name} />
            <span className="desc-wrapper">
              <h1 className="project-name">{project.name}</h1>
              <h3 className="project-desc">{project.desc}</h3>
            </span>
          </Link>
        </TweenOne>
      </ScrollOverPack>
    ));
    return (
      <div className="projects">
        <ScrollToTopOnMount />
        {projectList}
        <div style={{ display: "none" }}>
          {navItems.map(project => (
            <img src={project.lg_source} alt={project.name} key={project.id} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // curNavHeaderIdx: state.ui.curNavHeaderIdx,
  };
}

Projects.propTypes = {
  setCurNavHeaderIdx: PropTypes.func.isRequired
  // curNavHeaderIdx: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  { setCurNavHeaderIdx }
)(Projects);
