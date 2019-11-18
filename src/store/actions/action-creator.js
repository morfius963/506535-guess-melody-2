import Action from "./action-type.js";

const isArtistAnswerCorrect = (userAnswer, question) => (
  userAnswer === question.song.artist
);

const isGenreAnswerCorrect = (userAnswer, question) => (
  userAnswer.every((answer, i) => answer === (
    question.answers[i].genre === question.genre
  ))
);

const ActionCreator = {
  incrementStep: (userAnswer, question = {}, mistakes, maxMistakes, currentQuestionIndex, maxQuestionIndex) => {
    let answerIsCorrect = false;

    if (currentQuestionIndex + 1 >= maxQuestionIndex) {
      return Action.resultWin;
    }

    switch (question.type) {
      case `artist`:
        answerIsCorrect = isArtistAnswerCorrect(userAnswer, question);
        break;
      case `genre`:
        answerIsCorrect = isGenreAnswerCorrect(userAnswer, question);
        break;
      default:
        return Action.incrementStep;
    }

    if (!answerIsCorrect && mistakes + 1 >= maxMistakes) {
      return Action.resultLoseMistakes;
    }

    if (!answerIsCorrect) {
      return Action.incrementMistake;
    }

    return Action.incrementStep;
  },

  decrementTime: () => {
    return Action.decrementTime;
  },

  resetGame: () => {
    return Action.reset;
  },

  restartGame: () => {
    return Action.restartGame;
  },

  resultLoseTime: () => {
    return Action.resultLoseTime;
  },

  loadQuestions: Action.loadQuestions,

  registrateTimer: Action.registerTimer,

  singInUser: (userData) => {
    return Action.singInUser(userData);
  },
};

export default ActionCreator;
