import React, {useCallback} from "react";
import clsx from 'clsx';
import propTypes from "./prop-types.js";

const AudioPlayer = (props) => {
  const {audioRef, isLoading, isPlaying, onPlayButtonClick, id} = props;
  const buttonClassName = clsx(
      {
        'track__button': true,
        'track__button--pause': isPlaying,
        'track__button--play': !isPlaying
      }
  );
  const buttonClickhandler = useCallback(
      () => {
        onPlayButtonClick(id);
      },
      [id]
  );

  return (
    <React.Fragment>
      <button
        className={`${buttonClassName}`}
        type="button"
        disabled={isLoading}
        onClick={buttonClickhandler}
      />
      <div className="track__status">
        <audio ref={audioRef} />
      </div>
    </React.Fragment>
  );
};

AudioPlayer.propTypes = propTypes;

export default AudioPlayer;
