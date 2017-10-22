const dataStyle = {
  normal: {
    label: {
      show: false,
    },
    labelLine: {
      show: false,
    },
    shadowBlur: 20,
    shadowColor: 'rgba(40, 40, 40, 0.5)',
  },
};

const placeHolderStyle = {
  normal: {
    color: 'rgba(44, 59, 70, 0.5)',
    label: {
      show: false,
    },
    labelLine: {
      show: false,
    },
  },
};

const config = {
  title: {
    text: '南丁格尔玫瑰图',
    subtext: '纯属虚构',
    x: 'center',
    textStyle: {
      fontWeight: 'normal',
      color: '#b697cd',
    },
  },
  tooltip: {
    show: false,
  },
  toolbox: {
    show: false,
  },
  // color : ['#3dd4de','#b697cd','#a6f08f'],
  series: [
    {
      name: 'Pie1',
      type: 'pie',
      clockWise: false,
      radius: [90, 100],
      itemStyle: dataStyle,
      hoverAnimation: false,
      center: ['25%', '45%'],
      data: [
        {
          value: 65,
          name: 'Java',
          label: {
            normal: {
              formatter: '{d}%',
              position: 'center',
              show: true,
              textStyle: {
                fontSize: '35',
                fontWeight: 'normal',
                color: '#3dd4de',
              },
            },
          },
          itemStyle: {
            normal: {
              color: '#3dd4de',
              shadowColor: '#3dd4de',
              shadowBlur: 10,
            },
          },
        },
        {
          value: 35,
          name: 'invisible',
          itemStyle: placeHolderStyle,
          label: {
            normal: {
              show: false,
            },
          },
        },
      ],
    },
    {
      name: 'Pie2',
      type: 'pie',
      clockWise: false,
      radius: [90, 100],
      itemStyle: dataStyle,
      hoverAnimation: false,
      center: ['75%', '45%'],
      data: [
        {
          value: 50,
          name: 'SQL',
          label: {
            normal: {
              formatter: '{d}%',
              position: 'center',
              show: true,
              textStyle: {
                fontSize: '35',
                fontWeight: 'normal',
                color: '#b697cd',
              },
            },
          },
          itemStyle: {
            normal: {
              color: '#b697cd',
              shadowColor: '#b697cd',
              shadowBlur: 10,
            },
          },
        },
        {
          value: 50,
          name: 'invisible',
          itemStyle: placeHolderStyle,
        },
      ],
    },
  ],
};

export default config;
