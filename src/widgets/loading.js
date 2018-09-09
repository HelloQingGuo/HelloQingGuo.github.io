import React from "react";
// import PropTypes from 'prop-types';
import { Spin } from "antd";

import ScrollToTopOnMount from "./scrollToTopOnMount";

const Loading = () => (
  <div style={{ textAlign: "center", marginTop: "30vh" }}>
    <ScrollToTopOnMount />
    <Spin tip="Loading ..." size="large" />
  </div>
);

Loading.defaultProps = {};

Loading.propTypes = {};

export default Loading;
