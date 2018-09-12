import fan from "../../assets/projects/fan.svg";
import fanSM from "../../assets/projects/fan_sm.svg";
import yp from "../../assets/projects/yp.svg";
import ypSM from "../../assets/projects/yp_sm.svg";
import hearful from "../../assets/projects/hearful.svg";
import hearfulSM from "../../assets/projects/hearful_sm.svg";
import gui from "../../assets/projects/gui.svg";
import guiSM from "../../assets/projects/gui_sm.svg";

export const links = [
  {
    id: 0,
    name: "Hearful",
    desc: "Customer Feedback Analytics",
    backgroundColor: "#ff5b5b",
    link: "/dashboard/projects/hearful",
    external_link: "https://www.hearfulhub.com/",
    source: hearfulSM,
    lg_source: hearful,
    overview: [
      {
        item: "context",
        desc:
          "First time to use React, from scratch, pivotal role of the first release, global brand customers, 2 major iteration"
      },
      {
        item: "my role",
        desc:
          "Lead the front end development, including design, development, deployment, testing, mentoring juniors"
      },
      {
        item: "technologies",
        desc:
          "React/Redux, Redux-saga, Echarts, Jest/Enzyme, React-puppeteer, React-loadable, SASS, Ant Design"
      },
      {
        item: "the challenge",
        desc:
          "Explored the best practices of React technologies, integrated with third party library which was not React compatible"
      }
    ],
    detail: [
      {
        item: "Introduction",
        desc: [
          "Hearful provides smart-signals as a software as a service to consumer brand and retail decision-makers about their products and their competitors' products.",
          "Our product intelligence is used across the enterprise to spot early signs of product risks, opportunities, and trends that can better inform decisions on product management, design and development, merchandising, demand and supply chain management, marketing and branding, pricing, sales, and forecasting.",
          "We deliver intelligence, answers and data over the cloud as a subscription. Clients can choose to interact with the data directly or simply subscribe to answers as a service."
        ]
      },
      {
        item: "What did I do",
        desc: [
          "Designed, developed the front end using React/Redux tech stack, proactively applied best practices in every iteration, continuously improved the product quality",
          "Built various highly interactive charts to help customers better understand their product insights",
          "Rewrote the Hearful front end with all the best practices applied and a better project structure",
          "Constructed the boilerplate, wrote thorough documentations, adopted async user-flow middleware to help manage complex async tasks",
          "Did E2E tests by JEST, Puppeteer to validate the whole system by simulating a real user, did unit tests by JEST, Enzyme and ReduxSaga to ensure components functionality"
        ]
      },
      {
        item: "Conclusion",
        desc: [
          "Harful is a game changer for brands and retailers since it figures out exactly what shoppers think about products in your market and what matters most to them.",
          "We believe the code to success is understanding, in real-time, exactly what customers expect and want from your products and being able to deliver on that."
        ]
      }
    ]
  },
  {
    id: 1,
    name: "YouPlea",
    desc: "The Automated Adjudication Service",
    link: "/dashboard/projects/youplea",
    external_link: "https://youplea.com/",
    source: ypSM,
    lg_source: yp,
    backgroundColor: "#6dc6b1",
    overview: [
      {
        item: "context",
        desc: "Moving fast, rapid-chanage requirements, B2C, Agile methodology"
      },
      {
        item: "my role",
        desc:
          "Led the front end development, also took part in the back end development."
      },
      {
        item: "technologies",
        desc:
          "React for POC, Angular 6 for production release, Material Design, Highly-modularized front end architecture, Serveless."
      },
      {
        item: "the challenge",
        desc:
          "YouPlea's jurisdiction based clients serve different communities through different processes. The reality led us putting more efforts on designing an one-size-fits-all hierarchy in the front end, to meet the current and potential clients needs. Since YouPlea provides citizen portal, we also need to optimize the browser compatibility and accessibility."
      }
    ],
    detail: [
      {
        item: "Introduction",
        desc: [
          "YouPlea's online platform connects prosecutors, judges, and citizens to make the pretrial resolution process more efficient for everyone involved and provides valuable analytics that can improve the process.",
          "YouPlea is the result of collaboration between several North Carolina attorneys and Quantworks. Together they recognized inefficiencies in the pretrial resolution process and developed a revolutionary solution."
        ]
      },
      {
        item: "What did I do",
        desc: [
          "Designed and developed the uniform front end of two platforms (for citizens and prosecutors) using Angular tech stack.",
          "Architected and optimized configurable mechanism to construct highly self-adjustable components dynamicly to provide personalized experience for clients from different jurisdictions.",
          "Built reusable plugins used widely in the team, for example, Form-Builder and Grid-System.",
          // "Developed the back-end service using Node.js, Serverless Framework, AWS-Lambda and AWS-DynamoDB.",
          "Led the testing cycle, did unit testing by Karma and Jasmine, did the browser compatibility testing, proactively applied optimizations to ensure the products' usability and reliability.",
          "Built the Gitlab CI/CD pipeline to automatically set up environment, test, build and deploy apps with a simple git-push to remote repository."
        ]
      },
      {
        item: "Conclusion",
        desc: [
          "We are developing the applications with the mind of applying appropriate industry best practices as always, after the first release, YouPlea reached to a phenomenal stage where it is highly accessable, available and easily to be extended to support new clients.",
          'We will never say it is perfect, instead, we always target at the "perfect" !'
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Fanalytical",
    desc: "Aanlytics Built for Action",
    link: "/dashboard/projects/fanalytical",
    external_link: "https://fanalytical.com/",
    source: fanSM,
    lg_source: fan,
    backgroundColor: "#ffd221",
    overview: [
      {
        item: "context",
        desc: "Design, develop, write copy, and manage affairs."
      },
      {
        item: "my role",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        item: "technologies",
        desc: "Lorem, Ipsum, Dolor, Sit, Amet."
      },
      {
        item: "the challenge",
        desc:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      }
    ],
    detail: [
      {
        item: "Lorem a ipsum",
        desc: [
          "Proin nibh elit, consectetur eu ullamcorper nec, luctus eget augue. Donec nec elit nisi. Donec a placerat massa. Suspendisse pretium vitae libero at eleifend. Sed eu ante velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce placerat tristique mollis. Donec vitae ullamcorper dolor. Duis faucibus ac sapien vitae elementum. Donec posuere lacinia consectetur. Vestibulum interdum mollis purus, sed imperdiet odio dictum sed. Duis convallis arcu id purus suscipit commodo. Donec mi nunc, euismod pharetra tempus a, venenatis id dolor. Pellentesque eleifend, enim vel vehicula suscipit, eros lectus vestibulum erat, vitae pharetra ligula mauris eu justo.",
          "Proin nibh elit, consectetur eu ullamcorper nec, luctus eget augue. Donec nec elit nisi. Donec a placerat massa."
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Taxonomy GUI",
    desc: "Interact with Your Taxonomy",
    link: "/dashboard/projects/taxonomy",
    external_link: "https://taxonomygui.herokuapp.com/",
    source: guiSM,
    lg_source: gui,
    backgroundColor: "#63aaff",
    overview: [
      {
        item: "context",
        desc: "Design, develop, write copy, and manage affairs."
      },
      {
        item: "my role",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        item: "technologies",
        desc: "Lorem, Ipsum, Dolor, Sit, Amet."
      },
      {
        item: "the challenge",
        desc:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      }
    ],
    detail: [
      {
        item: "Lorem a ipsum",
        desc: [
          "Proin nibh elit, consectetur eu ullamcorper nec, luctus eget augue. Donec nec elit nisi. Donec a placerat massa. Suspendisse pretium vitae libero at eleifend. Sed eu ante velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce placerat tristique mollis. Donec vitae ullamcorper dolor. Duis faucibus ac sapien vitae elementum. Donec posuere lacinia consectetur. Vestibulum interdum mollis purus, sed imperdiet odio dictum sed. Duis convallis arcu id purus suscipit commodo. Donec mi nunc, euismod pharetra tempus a, venenatis id dolor. Pellentesque eleifend, enim vel vehicula suscipit, eros lectus vestibulum erat, vitae pharetra ligula mauris eu justo.",
          "Proin nibh elit, consectetur eu ullamcorper nec, luctus eget augue. Donec nec elit nisi. Donec a placerat massa."
        ]
      }
    ]
  }
  // {
  //   id: 4,
  //   name: "NgGrid",
  //   desc: "24 Grid Responsive System",
  //   link: "/dashboard/projects/nggrid",
  //   external_link: "https://helloqingguo.github.io/ng-grid/",
  //   source: guiSM,
  //   lg_source: gui,
  //   backgroundColor: "#63aaff",
  //   overview: [
  //     {
  //       item: "context",
  //       desc: "Design, develop, write copy, and manage affairs."
  //     },
  //     {
  //       item: "my role",
  //       desc:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  //     },
  //     {
  //       item: "technologies",
  //       desc: "Lorem, Ipsum, Dolor, Sit, Amet."
  //     },
  //     {
  //       item: "the challenge",
  //       desc:
  //         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  //     }
  //   ],
  //   detail: [
  //     {
  //       item: "Lorem a ipsum",
  //       desc: [
  //         "Proin nibh elit, consectetur eu ullamcorper nec, luctus eget augue. Donec nec elit nisi. Donec a placerat massa. Suspendisse pretium vitae libero at eleifend. Sed eu ante velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce placerat tristique mollis. Donec vitae ullamcorper dolor. Duis faucibus ac sapien vitae elementum. Donec posuere lacinia consectetur. Vestibulum interdum mollis purus, sed imperdiet odio dictum sed. Duis convallis arcu id purus suscipit commodo. Donec mi nunc, euismod pharetra tempus a, venenatis id dolor. Pellentesque eleifend, enim vel vehicula suscipit, eros lectus vestibulum erat, vitae pharetra ligula mauris eu justo.",
  //         "Proin nibh elit, consectetur eu ullamcorper nec, luctus eget augue. Donec nec elit nisi. Donec a placerat massa."
  //       ]
  //     }
  //   ]
  // }
];
