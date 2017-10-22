import React, { Component } from 'react';
import { Tag } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { config as config1, seriesData as seriesData1 } from './config1';
import './me.css';

class TabFE extends Component {
  componentDidMount() {
    let currentIndex = 0;
    const maxDataLen = seriesData1.length;
    // execute once at the beginning
    this.chart = this.react_echart.getEchartsInstance();
    setTimeout(() => {
      this.chart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
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
          style={{ height: '300px' }}
        />
        <div className="tags">
          <Tag color="#fc4343">ES 7</Tag>
          <Tag color="#e043b7">Yarn</Tag>
          <Tag color="#3085de">CSS Animations</Tag>
        </div>
      </div>
    );
  }
}

export default TabFE;
