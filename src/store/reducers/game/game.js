import {ActionType} from "../../actions/action-type.js";

const GAME_TIME_MINUTES = 5;

const initialAppState = {
  questionStep: -1,
  mistakes: 0,
  time: GAME_TIME_MINUTES * 60 * 1000,
  gameTimer: null
};

const game = (state = initialAppState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP: return Object.assign({}, state, {
      questionStep: state.questionStep + action.payload
    });

    case ActionType.INCREMENT_MISTAKES: return Object.assign({}, state, {
      questionStep: state.questionStep + action.payload,
      mistakes: state.mistakes + action.payload
    });

    case ActionType.DECREMENT_TIME: return Object.assign({}, state, {
      time: state.time - action.payload
    });

    case ActionType.REGISTRATE_TIMER: return Object.assign({}, state, {
      gameTimer: action.payload
    });

    case ActionType.RESET:
      clearInterval(state.gameTimer);
      return Object.assign({}, initialAppState);
  }

  return state;
};

export default game;
