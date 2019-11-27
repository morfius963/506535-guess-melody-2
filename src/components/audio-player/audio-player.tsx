import * as React from "react";
import {useCallback} from "react";
import clsx from 'clsx';
import {Props} from "./interface";

const AudioPlayer = ({audioRef, isLoading, isPlaying, onPlayButtonClick, id}: Props) => {
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
        <audio ref={audioRef} loop />
      </div>
    </React.Fragment>
  );
};

export default AudioPlayer;
