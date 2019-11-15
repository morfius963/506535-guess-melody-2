export const ActionType = {
  INCREMENT_STEP: `INCREMENT_STEP`,
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  RESET: `RESET`,
  DECREMENT_TIME: `DECREMENT_TIME`,
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
  REGISTRATE_TIMER: `REGISTRATE_TIMER`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  SING_UP_USER: `SING_UP_USER`
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

  requireAuthorization: {
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: true
  },

  singUpUser: (userData) => {
    const {email, password} = userData;

    return {
      type: ActionType.SING_UP_USER,
      payload: {
        email,
        password
      }
    };
  },

  loadQuestions: (questions) => {
    return {
      type: ActionType.LOAD_QUESTIONS,
      payload: {
        questions,
        isLoading: false
      }
    };
  },

  registerTimer: (id) => {
    return {
      type: ActionType.REGISTRATE_TIMER,
      payload: id
    };
  }
};
