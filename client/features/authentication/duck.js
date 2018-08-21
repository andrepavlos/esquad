const initialState = {};

const NAME = "AUTHENTICATION";
const SIGN_IN = `${NAME}_SIGN_IN`;

export const signIn = () => dispatch => {
  dispatch({ type: SIGN_IN });
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return state;

    default:
      return state;
  }
}
