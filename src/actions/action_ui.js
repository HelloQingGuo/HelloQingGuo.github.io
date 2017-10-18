export const SHOWNBG = 'SHOWNBG_UI';
export const SETCURNAV = 'SETCURNAV_UI';

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
