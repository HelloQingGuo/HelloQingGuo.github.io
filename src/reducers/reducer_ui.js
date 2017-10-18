import {} from '../actions/actions_ui';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case TOGGLELOADING:
    //   return { ...state, loading: !state.loading };
    default:
      return state;
  }
};
