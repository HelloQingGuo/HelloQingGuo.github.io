import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import ScrollToTopOnMount from '../scrollToTopOnMount';
import NavHeader from '../nav_header_2';
import './index.css';
import ArrowNav from '../arrow_nav';

const getProjectOverview = (overview) => {
  const len = overview.length;
  let counter = 0;
  const overviewHTML = [];
  while (counter < len) {
    if (counter + 1 < len) {
      overviewHTML.push(
        <div className="overview-wrapper" key={overview[counter].item}>
          <div className="overview">
            <div className="left">
              <h2>
                {overview[counter].item}
              </h2>
              <p>
                {overview[counter].desc}
              </p>
            </div>
            <div className="right">
              <h2>
                {overview[counter + 1].item}
              </h2>
              <p>
                {overview[counter + 1].desc}
              </p>
            </div>
          </div>
        </div>,
      );
    } else {
      overviewHTML.push(
        <div className="overview-wrapper" key={overview[counter].item}>
          <div className="overview">
            <div className="left">
              <h2>
                {overview[counter].item}
              </h2>
              <p>
                {overview[counter].desc}
              </p>
            </div>
          </div>
        </div>,
      );
    }
    counter += 2;
  }
  return overviewHTML;
};

const Detail = ({ projectDetail }) =>
  (<div className="project-detail">
    <ScrollToTopOnMount />
    <NavHeader />
    <QueueAnim
      component="div"
      className="first-screen"
      key="wrapper"
      type="bottom"
      ease="easeInSine"
      interval={250}
      duration={550}
    >
      <div className="logo-wrapper" key="logo">
        <img src={projectDetail.lg_source} alt="logo" />
      </div>
      <h1 className="title" key="title">
        {projectDetail.name}
      </h1>
      <h2 className="subtitle" key="subtitle">
        {projectDetail.desc}
      </h2>
    </QueueAnim>
    {getProjectOverview(projectDetail.overview)}
    <div className="detail-wrapper ">
      <div className="detail">
        {projectDetail.detail.map(each =>
          (<div key={each.item}>
            <h1>
              {each.item}
            </h1>
            {each.desc.map(eachDesc =>
              (<p key={eachDesc}>
                {eachDesc}
              </p>),
            )}
          </div>),
        )}
      </div>
    </div>
    <ArrowNav />
  </div>);

Detail.propTypes = {
  projectDetail: PropTypes.shape({}).isRequired,
};

export default Detail;