import React from "react";
// import PropTypes from 'prop-types';
import { Spin } from "antd";

const Loading = () => (
  <div style={{ textAlign: "center", marginTop: "30vh" }}>
    <Spin tip="Loading ..." size="large" />
  </div>
);

Loading.defaultProps = {};

Loading.propTypes = {};

export default Loading;
