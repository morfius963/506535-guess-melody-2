import React from "react";
import propTypes from "./prop-types.js";

class GameTime extends React.PureComponent {
  constructor(props) {
    super(props);

    this._start();
  }

  render() {
    const {time} = this.props;
    const minutes = parseInt(time / 1000 / 60, 10);
    const seconds = parseInt(time / 1000 % 60, 10);

    return <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
      <span className="timer__mins">{`${minutes}`.padStart(2, `0`)}</span>
      <span className="timer__dots">:</span>
      <span className="timer__secs">{`${seconds}`.padStart(2, `0`)}</span>
    </div>;
  }

  _start() {
    const timerId = setInterval(() => {
      this._tick(timerId);
    }, 1000);
  }

  _tick(id = 0) {
    const {onTimeUpdate, onTimeEnd, time, mistakes, maxMistakes} = this.props;

    if (time <= 0 || mistakes >= maxMistakes) {
      clearInterval(id);
      return onTimeEnd();
    }

    return onTimeUpdate();
  }
}

GameTime.propTypes = propTypes;

export default GameTime;
