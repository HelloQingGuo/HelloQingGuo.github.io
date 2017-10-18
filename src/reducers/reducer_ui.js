import { SHOWNBG, SETCURNAV } from '../actions/action_ui';

const INITIAL_STATE = {
  bgShown: false,
  curNavId: 0,
  navItems: [
    {
      name: 'home',
      id: 0,
      link: '/',
    },
    {
      name: 'me',
      id: 1,
      link: '/dashboard/me',
    },
    {
      name: 'project',
      id: 2,
      link: '/dashboard/projects',
    },
    {
      name: 'resume',
      id: 3,
      link: '/dashboard/resume',
    },
  ],
  navItemsForHome: [
    {
      name: 'project',
      id: 2,
      link: '/dashboard/projects',
    },
    {
      name: 'me',
      id: 1,
      link: '/dashboard/me',
    },
    {
      name: 'resume',
      id: 3,
      link: '/dashboard/resume',
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOWNBG:
      return { ...state, bgShown: action.payload };
    case SETCURNAV:
      return { ...state, curNavId: action.payload };
    default:
      return state;
  }
};
