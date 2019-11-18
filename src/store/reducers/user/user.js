import {ActionType} from "../../actions/action-type.js";

const initialAppState = {
  isAuthorizationRequired: true,
  email: ``
};

const user = (state = initialAppState, action) => {
  switch (action.type) {
    case ActionType.SING_IN_USER: return Object.assign({}, state, {
      email: action.payload.email,
      isAuthorizationRequired: action.payload.requireAuthorization
    });
  }

  return state;
};

export default user;
