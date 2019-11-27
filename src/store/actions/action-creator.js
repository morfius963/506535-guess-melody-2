import Action from "./action-type.js";

const QUICK_ANSWER_TIME = 30 * 1000;

const isArtistAnswerCorrect = (userAnswer, question) => (
  userAnswer === question.song.artist
);

const isGenreAnswerCorrect = (userAnswer, question) => (
  userAnswer.every((answer, i) => answer === (
    question.answers[i].genre === question.genre
  ))
);

const ActionCreator = {
  incrementStep: (userAnswer, question = {}, mistakes, maxMistakes, currentQuestionIndex, maxQuestionIndex, answerTime) => {
    const answerPoints = answerTime >= QUICK_ANSWER_TIME ? 1 : 2;
    let answerIsCorrect = false;

    switch (question.type) {
      case `artist`:
        answerIsCorrect = isArtistAnswerCorrect(userAnswer, question);
        break;
      case `genre`:
        answerIsCorrect = isGenreAnswerCorrect(userAnswer, question);
        break;
      default:
        return Action.incrementStep(0);
    }

    if (currentQuestionIndex + 1 >= maxQuestionIndex) {
      return Action.resultWin(answerIsCorrect);
    }

    if (!answerIsCorrect && mistakes + 1 >= maxMistakes) {
      return Action.resultLoseMistakes;
    }

    if (!answerIsCorrect) {
      return Action.incrementMistake;
    }

    return Action.incrementStep(answerPoints);
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
