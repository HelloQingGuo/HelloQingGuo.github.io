import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import { config as config1, seriesData as seriesData1 } from './config1';
import TagList from '../widgets/tag_list';
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
          <TagList
            tags={[
              {
                name: 'ES 7',
                content:
                  'ES7 is the evolution of the ECMA-262 standard (commonly referred as Javascript).',
              },
              {
                name: 'Advanced CSS',
                content: 'Animations, Flexbox, CSS Grid, Responsive Design',
              },
              {
                name: 'Redux-Saga',
                content:
                  'Redux-Saga is a library that aims to make application side effects easier to manage, more efficient to execute, simple to test, and better at handling failures.',
              },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default TabFE;
