import {ActionType} from "../../actions/action-type.js";

const initialAppState = {
  questions: [],
  isLoading: true
};

const appData = (state = initialAppState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS: return Object.assign({}, state, {
      questions: action.payload.questions,
      isLoading: action.payload.isLoading
    });
  }

  return state;
};

export default appData;
