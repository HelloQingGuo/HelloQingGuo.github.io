import _ from 'lodash';
import echarts from 'echarts';

let dottedBase = [];
const lineData = [];
const barData = [];
const category = [];
for (let i = 0; i < 20; i++) {
  const date = new Date((dottedBase += 3600 * 24 * 1000));
  category.push([date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'));
  const b = Math.random() * 200;
  const d = Math.random() * 200;
  barData.push(b);
  lineData.push(d + b);
}

const config = {
  title: {
    text: 'Skills',
    x: 'center',
    top: 0,
    textStyle: {
      color: 'rgba(0, 0, 0, 0.70)',
      fontSize: '18',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        formatter: params => `${_.round(params.value, 2)}%`,
        backgroundColor: '#D14A61',
        shadowBlur: 6,
        shadowColor: '#999',
      },
    },
    formatter: '{b}: {c}%',
  },
  xAxis: [
    {
      type: 'category',
      data: category,
      axisTick: {
        alignWithLabel: true,
      },
      axisPointer: {
        triggerTooltip: false,
        label: {
          formatter: params => params.value,
          backgroundColor: '#D14A61',
          shadowBlur: 6,
          shadowColor: '#333',
        },
      },
      axisLine: {
        lineStyle: {
          color: '#333',
        },
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: { show: false },
      axisLabel: {
        formatter: '{value}%',
      },
      axisLine: {
        lineStyle: {
          color: '#333',
        },
      },
    },
  ],
  toolbox: {
    show: true,
    showTitle: true,
    right: 4,
    top: 0,
    itemGap: 10,
    itemSize: 14,
    feature: {
      magicType: { show: true, type: ['line', 'bar'], title: { line: 'Line', bar: 'Bar' } },
      restore: { show: true, title: 'Refresh' },
      saveAsImage: { show: true, title: 'Save' },
    },
  },
  grid: {
    left: 24,
    right: 24,
    top: 54,
    bottom: 6,
    containLabel: true,
  },
  series: [
    {
      name: 'bar',
      type: 'bar',
      barWidth: 10,
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          color: echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#14c8d4' },
            { offset: 1, color: '#43eec6' },
          ]),
        },
      },
      data: barData,
    },
    {
      name: 'dotted',
      type: 'pictorialBar',
      symbol: 'rect',
      itemStyle: {
        normal: {
          color: '#0f375f',
        },
      },
      symbolRepeat: true,
      symbolSize: [12, 4],
      symbolMargin: 1,
      z: -10,
      data: lineData,
    },
  ],
  color: ['#00D7B6', '#7F7C77'],
  backgroundColor: '#fff',
  animationEasing: 'elasticOut',
};

export default config;
