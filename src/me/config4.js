import _ from 'lodash';
import { scoreMapping, skillScoresOfDevTools, identifyProficiency } from './util';

export const seriesData = skillScoresOfDevTools.map(skill => skill.value);
const xAxisData = skillScoresOfDevTools.map(skill => skill.name);

export const config = {
  title: {
    show: false,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        formatter: params => `${_.round(params.value, 2)}`,
        backgroundColor: '#D14A61',
        shadowBlur: 6,
        shadowColor: '#999',
      },
    },
    formatter: (params) => {
      const skillProficiency = identifyProficiency(params[0].data, scoreMapping);
      return `${params[0].axisValueLabel} - <strong>${skillProficiency.level}</strong> - ${params[0]
        .data}`;
    },
  },
  xAxis: [
    {
      type: 'category',
      data: xAxisData,
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
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '{value}',
      },
      splitLine: {
        show: false,
      },
    },
  ],
  toolbox: {
    show: true,
    showTitle: true,
    orient: 'horizontal',
    right: 'center',
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
    left: '8%',
    right: '8%',
    top: 44,
    bottom: 14,
    containLabel: true,
  },
  series: [
    {
      name: 'Days - Citation to Disposition',
      type: 'bar',
      barWidth: '60%',
      data: seriesData,
    },
  ],
  color: ['#24E1DD', '#7F7C77'],
  backgroundColor: '#fff',
  animationEasing: 'elasticOut',
};
