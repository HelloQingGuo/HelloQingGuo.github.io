export const SHOWNBG = 'SHOWNBG_UI';
export const SETCURNAV = 'SETCURNAV_UI';
export const SETCURNAVHEADER = 'SETCURNAVHEADER_UI';

export function showBG(shown) {
  return {
    type: SHOWNBG,
    payload: shown,
  };
}

export function setCurNav(curNavId) {
  return {
    type: SETCURNAV,
    payload: curNavId,
  };
}

export function navigate(direction, curNavHeaderIdx, navItems) {
  if (curNavHeaderIdx === 0 && direction === -1) {
    return {
      type: SETCURNAVHEADER,
      payload: navItems.length - 1,
    };
  }
  if (curNavHeaderIdx === navItems.length - 1 && direction === 1) {
    return {
      type: SETCURNAVHEADER,
      payload: 0,
    };
  }
  return {
    type: SETCURNAVHEADER,
    payload: curNavHeaderIdx + direction,
  };
}

export function setCurNavHeaderIdx(curNavHeaderIdx) {
  return {
    type: SETCURNAVHEADER,
    payload: curNavHeaderIdx,
  };
}
