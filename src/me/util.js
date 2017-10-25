// 56 - 70 Familiar
// 71 - 85 Proficient
// 86 - 100 Master

export const scoreMapping = [
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

export const skillScoresOfFE = [
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

export const skillScoresOfDevTools = [
  { value: 80, name: 'GIT' },
  { value: 56, name: 'EMACS' },
  { value: 69, name: 'VI / VIM' },
  { value: 85, name: 'ATOM' },
  { value: 70, name: 'Sublime' },
  { value: 68, name: 'Eclipse' },
  { value: 88, name: 'Chrome DevTools' },
  { value: 75, name: 'Redux DevTools' },
];

export const identifyProficiency = (score, mapping) => {
  for (let i = 0; i < mapping.length; i += 1) {
    if (score >= mapping[i].scoreRange[0] && score <= mapping[i].scoreRange[1]) {
      return mapping[i];
    }
  }
  return null;
};

export const findMin = (skills) => {
  let min = Number.MAX_VALUE;
  skills.forEach((skill) => {
    min = skill.value < min ? skill.value : min;
  });
  return min;
};

export const localize = (skills, min) =>
  skills.map(skill => ({
    value: (skill.value - min + 5) * 2,
    name: skill.name,
  }));
