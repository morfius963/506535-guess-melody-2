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
      return Action.reset;
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
      return Action.reset;
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

  loadQuestions: Action.loadQuestions,

  registrateTimer: Action.registerTimer
};

export default ActionCreator;
