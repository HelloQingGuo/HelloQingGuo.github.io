import React from "react";
import { Spin } from "antd";
// import PropTypes from 'prop-types';
// import "font-awesome/css/font-awesome.css";
import ScrollToTopOnMount from "./scrollToTopOnMount";

const Loading = () => (
  <div style={{ textAlign: "center", marginTop: "30vh" }}>
    <ScrollToTopOnMount />
    <Spin tip="Loading ..." size="large" />
    {/* <i className="fa fa-star fa-4x spin " aria-hidden="true" />
    <h3>Loading ...</h3> */}
  </div>
);

Loading.defaultProps = {};

Loading.propTypes = {};

export default Loading;
