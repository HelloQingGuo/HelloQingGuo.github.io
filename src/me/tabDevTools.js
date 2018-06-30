import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import TagList from '../widgets/tag_list';
import { config, seriesData } from './config4';
import './me.css';

class TabDevTools extends Component {
  componentWillMount() {
    echarts.registerTheme('theme_FE', {
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
    let currentIndex = 0;
    const maxDataLen = seriesData.length;
    // execute once at the beginning
    this.chart = this.react_echart.getEchartsInstance();
    setTimeout(() => {
      this.chart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
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
          style={{ height: '286px' }}
        />
        <div className="tags">
          <TagList
            tags={[
              {
                name: 'Balsamiq',
                content:
                  'Balsamiq is a rapid wireframing tool that helps you Work Faster & Smarter.',
              },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default TabDevTools;
