import { scoreMapping, skillScoresOfFE, findMin, identifyProficiency, localize } from './util';

export const seriesData = localize(skillScoresOfFE, findMin(skillScoresOfFE));
const xAxisData = skillScoresOfFE.map(skill => skill.name);

export const config = {
  tooltip: {
    trigger: 'item',
    position: 'inside',
    formatter: (params) => {
      const skillObj = skillScoresOfFE.find(skill => skill.name === params.name);
      const skillProficiency = identifyProficiency(skillObj.value, scoreMapping);
      return `${skillObj.name} - <strong>${skillProficiency.level}</strong> - ${skillObj.value}`;
    },
  },
  legend: {
    x: 'center',
    y: 'bottom',
    show: false,
    data: xAxisData,
  },
  toolbox: {
    show: false,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ['pie', 'funnel'],
      },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  series: [
    {
      name: 'Front End Skill Proficiency',
      type: 'pie',
      radius: ['15%', '65%'],
      center: ['50%', '45%'],
      roseType: 'radius',
      labelLine: {
        normal: {
          length: 2,
          length2: 10,
          // smooth: true,
        },
      },
      data: seriesData,
    },
  ],
};
