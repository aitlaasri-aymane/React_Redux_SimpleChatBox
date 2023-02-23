import state from "../StaticData";

const initialState = state.contacts;

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
