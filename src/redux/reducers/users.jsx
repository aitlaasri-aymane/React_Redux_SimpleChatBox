import state from "../StaticData";

const initialState = state.user;

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
