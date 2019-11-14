export const ActionType = {
  INCREMENT_STEP: `INCREMENT_STEP`,
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  RESET: `RESET`,
  DECREMENT_TIME: `DECREMENT_TIME`,
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
  REGISTRATE_TIMER: `REGISTRATE_TIMER`
};

export default {
  incrementStep: {
    type: ActionType.INCREMENT_STEP,
    payload: 1
  },

  incrementMistake: {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1
  },

  reset: {
    type: ActionType.RESET
  },

  decrementTime: {
    type: ActionType.DECREMENT_TIME,
    payload: 1000
  },

  loadQuestions: (questions) => {
    return {
      type: ActionType.LOAD_QUESTIONS,
      payload: questions
    };
  },

  registerTimer: (id) => {
    return {
      type: ActionType.REGISTRATE_TIMER,
      payload: id
    };
  }
};
