import * as React from "react";
import ArtistAnswer from "../artist-answer/artist-answer";
import {Props} from "./interface";

class ArtistQuestionScreen extends React.PureComponent<Props, null> {
  _startTime: null | number;

  constructor(props) {
    super(props);

    this._startTime = null;

    this._formSubmitHandler = this._formSubmitHandler.bind(this);
  }

  componentDidUpdate() {
    if (this._startTime !== null) {
      return;
    }

    this._startTime = performance.now();
  }

  render() {
    const {questions, screenIndex, renderPlayer} = this.props;
    const {answers, song} = questions;

    return (
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">

            {renderPlayer(song, 0)}

          </div>
        </div>

        <form className="game__artist" onChange={this._formSubmitHandler}>
          {
            answers.map((answer, i) => <ArtistAnswer key={`${screenIndex}-${answer}-${i}`} answer={answer} id={i} />)
          }
        </form>
      </section>
    );
  }

  _formSubmitHandler(evt) {
    const {onAnswer, resetActivePlayerValue} = this.props;
    const asnwerValue = evt.target.value;
    const answerTime = performance.now() - this._startTime;

    onAnswer(asnwerValue, answerTime);
    resetActivePlayerValue();
    this._startTime = null;
  }
}

export default ArtistQuestionScreen;
