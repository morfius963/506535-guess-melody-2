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
  mistakes: 0
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
  }
};

const reducer = (state = initialAppState, action) => {
  switch (action.type) {
    case `INCREMENT_STEP`: return Object.assign({}, state, {
      questionStep: state.questionStep + action.payload
    });

    case `INCREMENT_MISTAKES`: return Object.assign({}, state, {
      mistakes: state.mistakes + action.payload
    });

    case `RESET`: return Object.assign({}, initialAppState);
  }

  return state;
};

export {isArtistAnswerCorrect, isGenreAnswerCorrect, ActionCreator, reducer};
