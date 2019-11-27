import * as React from "react";
import {Props} from "./interface";

class GameTime extends React.PureComponent<Props, null> {
  _TIMER_BLINK_VALUE: number;

  constructor(props) {
    super(props);

    this._TIMER_BLINK_VALUE = 1000 * 30;

    props.registrateTimer(this._start());
  }

  render() {
    const {time} = this.props;
    const minutes = parseInt(`${time / 1000 / 60}`, 10);
    const seconds = parseInt(`${time / 1000 % 60}`, 10);

    return (
      <div className={`timer__value ${time < this._TIMER_BLINK_VALUE ? `timer__value--finished` : ``}`}>
        <span className="timer__mins">{`${minutes}`.padStart(2, `0`)}</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">{`${seconds}`.padStart(2, `0`)}</span>
      </div>
    );
  }

  _start() {
    return setInterval(() => {
      this._tick();
    }, 1000);
  }

  _tick() {
    const {onTimeUpdate, onTimeEnd, time} = this.props;

    if (time <= 0) {
      return onTimeEnd();
    }

    return onTimeUpdate();
  }
}

export default GameTime;
