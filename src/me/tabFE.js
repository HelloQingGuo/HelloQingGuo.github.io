import React, { Component } from 'react';
import { Tag, Tooltip } from 'antd';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import { config as config1, seriesData as seriesData1 } from './config1';
import './me.css';

class TabFE extends Component {
  componentWillMount() {
    echarts.registerTheme('theme_FE', {
      // color: colorPalette,
      tooltip: {
        textStyle: {
          fontSize: 12,
        },
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
      },
      textStyle: {
        fontFamily: 'SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
      },
    });
  }

  componentDidMount() {
    // const colorPalette = ['#dd6b66','#759aa0','#e69d87','#8dc1a9','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab', '#91ca8c','#f49f42'];

    let currentIndex = 0;
    const maxDataLen = seriesData1.length;
    // execute once at the beginning
    this.chart = this.react_echart.getEchartsInstance();
    setTimeout(() => {
      this.chart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        position: 'inside',
        dataIndex: currentIndex,
      });
    }, 0);
    this.timerOfFE = setInterval(() => {
      // Cancel highlighted current scatter
      this.chart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
      currentIndex = (currentIndex + 1) % maxDataLen;
      // Highlight current scatter
      this.chart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
      this.chart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        position: 'inside',
        dataIndex: currentIndex,
      });
    }, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.timerOfFE);
  }

  render() {
    return (
      <div className="frontend">
        <ReactEcharts
          ref={(e) => {
            this.react_echart = e;
          }}
          option={config1}
          notMerge
          lazyUpdate={false}
          onChartReady={this.onChartReadyCallback}
          theme="theme_FE"
          style={{ height: '286px' }}
        />

        <div className="tags">
          <Tooltip title="ES7 is the evolution of the ECMA-262 standard (commonly referred as Javascript).">
            <Tag color="#fc4343">ES 7</Tag>
          </Tooltip>
          <Tooltip title="Fast, reliable, and secure dependency management.">
            <Tag color="#e043b7">Yarn</Tag>
          </Tooltip>
          <Tooltip title="Animations, Flexbox, CSS Grid, Responsive Design">
            <Tag color="#3085de">Advanced CSS</Tag>
          </Tooltip>
          <Tooltip title="Redux-Saga is a library that aims to make application side effects easier to manage, more efficient to execute, simple to test, and better at handling failures.">
            <Tag color="#24e1dd">Redux-Saga</Tag>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default TabFE;
