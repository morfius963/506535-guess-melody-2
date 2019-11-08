import React from 'react';
import {mount} from 'enzyme';
import {questions} from "../../__fixtures__/questions.js";
import withAudioPlayer from "./with-audio-player.jsx";

describe(`end to end test`, () => {
  it(`AudioPlayer can switch his state when song has started`, () => {
    const clickHandler = jest.fn();
    const currentQuestion = questions.find((question) => question.type === `artist`);
    const ref = {
      current: document.createElement(`audio`)
    };
    const props = {
      src: currentQuestion.song.src,
      isPlaying: false,
      onPlayButtonClick: clickHandler
    };
    const mockComponent = () => <div></div>;
    const MockComponentWrapped = withAudioPlayer(mockComponent);

    // это для обработки ref
    jest.spyOn(React, `createRef`).mockImplementation(() => ref);

    const audioPlayer = mount(<MockComponentWrapped {...props} />);

    audioPlayer.instance()._onPlayButtonClick();
    expect(audioPlayer.state().isPlaying).toEqual(true);

    audioPlayer.instance()._onPlayButtonClick();
    expect(audioPlayer.state().isPlaying).toEqual(false);
  });
});
