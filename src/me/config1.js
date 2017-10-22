// 56 - 70 Familiar
// 71 - 85 Proficient
// 86 - 100 Master
const scoreMapping = [
  {
    level: 'Familiar',
    color: '#519c9c',
    scoreRange: [56, 70],
  },
  {
    level: 'Proficient',
    color: '#e2aa69',
    scoreRange: [71, 85],
  },
  {
    level: 'Master',
    color: '#e17768',
    scoreRange: [86, 100],
  },
];

const identifyProficiency = (score) => {
  for (let i = 0; i < scoreMapping.length; i += 1) {
    if (score >= scoreMapping[i].scoreRange[0] && score <= scoreMapping[i].scoreRange[1]) {
      return scoreMapping[i];
    }
  }
  return null;
};

const skillScores = [
  { value: 82, name: 'HTML' },
  { value: 81, name: 'CSS (SASS)' },
  { value: 83, name: 'Javascript' },
  { value: 90, name: 'React / Redux' },
  { value: 71, name: 'Webpack' },
  { value: 75, name: 'CMS' },
  { value: 85, name: 'Data Visualization' },
  { value: 72, name: 'Ant UI' },
  { value: 77, name: 'Bootstrap' },
];

const findMin = (skills) => {
  let min = Number.MAX_VALUE;
  skills.forEach((skill) => {
    min = skill.value < min ? skill.value : min;
  });
  return min;
};

const localize = (skills) => {
  const min = findMin(skills);
  return skills.map(skill => ({
    value: (skill.value - min + 5) * 2,
    name: skill.name,
    // itemStyle: {
    //   normal: {
    //     color: identifyProficiency(skill.value).color,
    //   },
    // },
  }));
};

export const seriesData = localize(skillScores);

export const config = {
  tooltip: {
    trigger: 'item',
    hideDelay: 99999,
    formatter: (params) => {
      const skillObj = skillScores.find(skill => skill.name === params.name);
      const skillProficiency = identifyProficiency(skillObj.value);
      return `${skillObj.name} - <strong>${skillProficiency.level}</strong> - ${skillObj.value}`;
    },
  },
  legend: {
    x: 'center',
    y: 'bottom',
    show: false,
    data: [
      'HTML',
      'CSS (SASS)',
      'Javascript',
      'React / Redux',
      'Webpack',
      'CMS',
      'Data Visualization',
      'Ant UI',
      'Bootstrap',
    ],
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
      data: seriesData,
    },
  ],
};
