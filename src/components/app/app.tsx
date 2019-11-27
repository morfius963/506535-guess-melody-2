import * as React from "react";
import {connect} from "react-redux";
import {Switch, Route, Redirect} from "react-router-dom";

import ActionCreator from "../../store/actions/action-creator";
import Operation from "../../store/actions/async-actions";
import WelcomeScreen from "../welcome-screen/welcome-scren";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import GameHeader from "../game-header/game-header";
import AuthorizationScreen from "../authorization-screen/authorization-screen";
import GameResultLose from "../game-result-lose/game-result-lose";
import GameResultSuccess from "../game-result-success/game-result-success";
import withActivePlayer from "../../hocs/with-active-player/with-active-player";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer";
import withAuthorizationScreen from "../../hocs/with-authorization-screen/with-authorization-screen";
import PrivateRoute from "../../hocs/with-private-route/with-private-route";
import {Props} from "./interface";

const GenreQuestionScreenWrapped = withUserAnswer(withActivePlayer(GenreQuestionScreen));
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);
const AuthorizationScreenWrapped = withAuthorizationScreen(AuthorizationScreen);

class App extends React.PureComponent<Props, null> {
  constructor(props) {
    super(props);

    this.props.loadQuestions();
  }

  render() {
    const {isAuthorizationRequired, postUserLogin, time, mistakes, gameResult, restartGame, points, quickAnswerCount} = this.props;

    return (
      <Switch>
        <Route
          path="/"
          exact
          render={() => this._renderMainPage()}
        />
        <Route
          path="/auth"
          exact
          render={(props) => <AuthorizationScreenWrapped onSubmit={postUserLogin} {...props} />}
        />
        <Route
          path="/lose"
          exact
          render={() => <GameResultLose result={gameResult} restartGame={restartGame} />}
        />
        <PrivateRoute
          path="/win"
          renderCmp={() => <GameResultSuccess time={time} mistakes={mistakes} restartGame={restartGame} points={points} quickAnswerCount={quickAnswerCount} />}
          isAuthorizationRequired={isAuthorizationRequired}
        />

        <Route
          render={() => (
            <section className="modal">
              <h2 className="modal__title">Произошла ошибка!</h2>
              <p className="modal__text">Статус: 404. Страница не найдена.</p>
            </section>
          )}
        />
      </Switch>
    );
  }

  _renderMainPage() {
    const {questions, questionStep, mistakes, time, onTimeUpdate, onTimeEnd, registrateTimer, isLoading, resetGame} = this.props;
    const currentQuestion = questions[questionStep];

    return (
      isLoading
        ? null
        : <section className="game">

          {currentQuestion && <GameHeader
            mistakes={mistakes}
            time={time}
            registrateTimer={registrateTimer}
            onTimeUpdate={onTimeUpdate}
            onTimeEnd={onTimeEnd}
            resetGame={resetGame}
          />}

          {this._getScreen(currentQuestion)}

        </section>
    );
  }

  _getScreen(question) {
    const {onUserAnswer, mistakes, maxMistakes, questions, questionStep, timeForGame, onWelcomeScreenClick, gameResult} = this.props;
    const currentQuestionIndex = questions.indexOf(question);
    const maxQuestionIndex = questions.length;

    if (gameResult) {
      const [result] = gameResult.split(`-`);
      return (
        <Redirect to={{
          pathname: `/${result}`
        }} />
      );
    }

    if (!question) {
      return <WelcomeScreen
        gameTime = {timeForGame}
        errorCount = {maxMistakes}
        onButtonClick = {onWelcomeScreenClick}
      />;
    }

    const userAnswerHandler = (userAnswer, answerTime) => onUserAnswer(
        userAnswer,
        question,
        mistakes,
        maxMistakes,
        currentQuestionIndex,
        maxQuestionIndex,
        answerTime
    );

    switch (question.type) {
      case `genre`:
        return (
          <GenreQuestionScreenWrapped
            questions={question}
            screenIndex={questionStep}
            onAnswer={userAnswerHandler}
          />
        );
      case `artist`:
        return (
          <ArtistQuestionScreenWrapped
            questions={question}
            screenIndex={questionStep}
            onAnswer={userAnswerHandler}
          />
        );
    }

    return null;
  }
}

const mapStateToProps = (state) => ({
  questionStep: state.game.questionStep,
  mistakes: state.game.mistakes,
  time: state.game.time,
  gameResult: state.game.gameResult,
  points: state.game.points,
  quickAnswerCount: state.game.quickAnswerCount,

  questions: state.appData.questions,
  isLoading: state.appData.isLoading,

  isAuthorizationRequired: state.user.isAuthorizationRequired
});

const mapDispatchToProps = {
  loadQuestions: Operation.loadQuestions,

  onWelcomeScreenClick: ActionCreator.incrementStep,

  onTimeUpdate: ActionCreator.decrementTime,

  onTimeEnd: ActionCreator.resultLoseTime,

  resetGame: ActionCreator.resetGame,

  restartGame: ActionCreator.restartGame,

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes, currentQuestionIndex, maxQuestionIndex, answerTime) => (
    ActionCreator.incrementStep(userAnswer, question, mistakes, maxMistakes, currentQuestionIndex, maxQuestionIndex, answerTime)
  ),

  registrateTimer: (id) => ActionCreator.registrateTimer(id),

  postUserLogin: (userData, pushPath) => Operation.postUserLogin(userData, pushPath)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
