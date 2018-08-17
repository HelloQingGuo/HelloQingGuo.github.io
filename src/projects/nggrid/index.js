import React, { Component } from "react";
import { links } from "../../widgets/constants/links";
import Detail from "../../widgets/detail";

class NgGrid extends Component {
  render() {
    return (
      <Detail
        projectDetail={links.find(link => link.name.toLowerCase() === "nggrid")}
      />
    );
  }
}

export default NgGrid;
