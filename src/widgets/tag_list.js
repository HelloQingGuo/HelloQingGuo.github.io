import React from "react";
import { Tag, Tooltip } from "antd";

// const colorPalette = ['#dd6b66','#759aa0','#e69d87','#8dc1a9','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab', '#91ca8c','#f49f42'];

const colorPalette = ["#fc4343", "#e043b7", "#3085de", "#24e1dd"];

const TagList = ({ tags }) =>
  tags.map((tag, idx) => (
    <Tooltip key={tag.name} title={tag.content}>
      <Tag color={colorPalette[idx % colorPalette.length]}>{tag.name}</Tag>
    </Tooltip>
  ));

export default TagList;
