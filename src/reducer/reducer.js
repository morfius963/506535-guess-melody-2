const GAME_TIME_MINUTES = 5;

const isArtistAnswerCorrect = (userAnswer, question) => (
  userAnswer === question.song.artist
);

const isGenreAnswerCorrect = (userAnswer, question) => (
  userAnswer.every((answer, i) => answer === (
    question.answers[i].genre === question.genre
  ))
);

const initialAppState = {
  questionStep: -1,
  mistakes: 0,
  time: GAME_TIME_MINUTES * 60 * 1000,
  gameTimer: null
};

const ActionCreator = {
  incrementStep: (currentQuestionIndex, maxQuestionIndex) => {
    if (currentQuestionIndex + 1 >= maxQuestionIndex) {
      return {
        type: `RESET`
      };
    }

    return {
      type: `INCREMENT_STEP`,
      payload: 1
    };
  },

  incrementMistake: (userAnswer, question, mistakes, maxMistakes) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case `artist`:
        answerIsCorrect = isArtistAnswerCorrect(userAnswer, question);
        break;
      case `genre`:
        answerIsCorrect = isGenreAnswerCorrect(userAnswer, question);
        break;
    }

    if ((!answerIsCorrect && mistakes + 1 >= maxMistakes)) {
      return {
        type: `RESET`
      };
    }

    return {
      type: `INCREMENT_MISTAKES`,
      payload: answerIsCorrect ? 0 : 1
    };
  },

  decrementTime: () => {
    return {
      type: `DECREMENT_TIME`,
      payload: 1000
    };
  },

  resetGame: () => {
    return {
      type: `RESET`
    };
  },

  registrateTimer: (id) => {
    return {
      type: `REGISTRATE_TIMER`,
      payload: id
    };
  }
};

const reducer = (state = initialAppState, action) => {
  switch (action.type) {
    case `INCREMENT_STEP`: return Object.assign({}, state, {
      questionStep: state.questionStep + action.payload
    });

    case `INCREMENT_MISTAKES`: {
      return Object.assign({}, state, {
        mistakes: state.mistakes + (state.questionStep === -1 ? 0 : action.payload)
      });
    }

    case `DECREMENT_TIME`:
      return Object.assign({}, state, {
        time: state.time - action.payload
      });

    case `REGISTRATE_TIMER`: return Object.assign({}, state, {
      gameTimer: action.payload
    });

    case `RESET`:
      clearInterval(state.gameTimer);
      return Object.assign({}, initialAppState);
  }

  return state;
};

export {isArtistAnswerCorrect, isGenreAnswerCorrect, ActionCreator, reducer};
