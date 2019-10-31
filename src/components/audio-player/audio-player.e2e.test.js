import React from 'react';
import {mount} from 'enzyme';
import {questions} from "../../__fixtures__/questions.js";
import AudioPlayer from "../audio-player/audio-player.jsx";

describe(`end to end test`, () => {
  it(`AudioPlayer can switch his state when song has started`, () => {
    const clickHandler = jest.fn();
    const currentQuestion = questions.find((question) => question.type === `artist`);
    const audioPlayer = mount(
        <AudioPlayer
          src={currentQuestion.song.src}
          isPlaying={false}
          onPlayButtonClick={clickHandler}
        />
    );
    const trackButton = audioPlayer.find(`.track__button`);

    audioPlayer.setState({isLoading: false});
    expect(audioPlayer.state().isLoading).toEqual(false);

    trackButton.simulate(`click`);
    expect(audioPlayer.state().isPlaying).toEqual(true);

    trackButton.simulate(`click`);
    expect(audioPlayer.state().isPlaying).toEqual(false);
  });
});
