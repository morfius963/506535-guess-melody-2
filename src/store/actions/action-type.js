export const ActionType = {
  INCREMENT_STEP: `INCREMENT_STEP`,
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  RESET: `RESET`,
  DECREMENT_TIME: `DECREMENT_TIME`,
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
  REGISTRATE_TIMER: `REGISTRATE_TIMER`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  SING_IN_USER: `SING_IN_USER`,
  RESULT_WIN: `RESULT_WIN`,
  RESULT_LOSE_TIME: `RESULT_LOSE_TIME`,
  RESULT_LOSE_MISTAKES: `RESULT_LOSE_MISTAKES`,
  RESTART_GAME: `RESTART_GAME`
};

export default {
  incrementStep: (points) => {
    const isQuickAnswer = points === 2;

    return {
      type: ActionType.INCREMENT_STEP,
      payload: {
        step: 1,
        points,
        quickAnswerCount: isQuickAnswer ? 1 : 0
      }
    };
  },

  incrementMistake: {
    type: ActionType.INCREMENT_MISTAKES,
    payload: {
      step: 1,
      mistakes: 1,
      points: -2
    }
  },

  reset: {
    type: ActionType.RESET
  },

  decrementTime: {
    type: ActionType.DECREMENT_TIME,
    payload: 1000
  },

  resultWin: (isAnswerCorrect) => {
    return {
      type: ActionType.RESULT_WIN,
      payload: {
        result: `win`,
        mistake: isAnswerCorrect ? 0 : 1
      }
    };
  },

  resultLoseTime: {
    type: ActionType.RESULT_LOSE_TIME,
    payload: `lose-time`
  },

  resultLoseMistakes: {
    type: ActionType.RESULT_LOSE_MISTAKES,
    payload: `lose-mistakes`
  },

  restartGame: {
    type: ActionType.RESTART_GAME,
    payload: {
      questionStep: 0
    }
  },

  singInUser: (userData = {}) => {
    const {email} = userData;

    return {
      type: ActionType.SING_IN_USER,
      payload: {
        email,
        requireAuthorization: false
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
