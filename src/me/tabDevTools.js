import React, { Component } from 'react';
import { Tag, Tooltip } from 'antd';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import { config, seriesData } from './config4';
import './me.css';

class TabDevTools extends Component {
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
    const maxDataLen = seriesData.length;
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
    this.timerOfDevTools = setInterval(() => {
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
    clearInterval(this.timerOfDevTools);
  }

  render() {
    return (
      <div className="devTools">
        <ReactEcharts
          ref={(e) => {
            this.react_echart = e;
          }}
          option={config}
          notMerge
          lazyUpdate={false}
          onChartReady={this.onChartReadyCallback}
          theme="theme_FE"
          style={{ height: '300px' }}
        />
        <div className="tags">
          <Tooltip title="Balsamiq is a rapid wireframing tool that helps you Work Faster & Smarter.">
            <Tag color="#fc4343">Balsamiq</Tag>
          </Tooltip>
          {/* <Tag color="#e043b7">Yarn</Tag>
          <Tag color="#3085de">CSS Animations</Tag> */}
        </div>
      </div>
    );
  }
}

export default TabDevTools;