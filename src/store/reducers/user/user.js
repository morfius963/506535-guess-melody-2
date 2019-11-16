import {ActionType} from "../../actions/action-type.js";

const initialAppState = {
  isAuthorizationRequired: false,
  email: ``,
  password: ``
};

const user = (state = initialAppState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload
    });

    case ActionType.SING_IN_USER: return Object.assign({}, state, {
      email: action.payload.email,
      password: action.payload.password
    });
  }

  return state;
};

export default user;
