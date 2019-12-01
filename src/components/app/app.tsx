import * as React from "react";
import GameHeader from "../game-header/game-header";
import {Props} from "./interface";

class App extends React.PureComponent<Props, null> {
  render() {
    const {questions, questionStep, mistakes, isLoading, resetGame, renderScreen} = this.props;
    const currentQuestion = questions[questionStep];

    return (
      isLoading
        ? null
        : <section className="game">

          {currentQuestion && <GameHeader mistakes={mistakes} resetGame={resetGame} />}

          {renderScreen(currentQuestion)}

        </section>
    );
  }
}

export default App;
