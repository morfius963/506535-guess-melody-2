import React from "react";
import propTypes from "./prop-types.js";

const AudioPlayer = (props) => {
  const {audioRef, isLoading, isPlaying, onPlayButtonClick} = props;
  return (
    <React.Fragment>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={isLoading}
        onClick={onPlayButtonClick}
      />
      <div className="track__status">
        <audio ref={audioRef} />
      </div>
    </React.Fragment>
  );
};

AudioPlayer.propTypes = propTypes;

export default AudioPlayer;
