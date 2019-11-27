import * as React from 'react';
import {mount} from 'enzyme';
import {questions} from "../../__fixtures__/questions";
import withAudioPlayer from "./with-audio-player";
import AudioPlayer from "../../components/audio-player/audio-player";

describe(`end to end test`, () => {
  it(`AudioPlayer can switch his state when song has started`, () => {
    const clickHandler = jest.fn();
    const currentQuestion = questions.find((question) => question.type === `artist`);
    const ref = {
      current: document.createElement(`audio`)
    };
    const props = {
      id: 0,
      src: currentQuestion.song.src,
      isPlaying: false,
      onPlayButtonClick: clickHandler
    };
    const MockComponentWrapped = withAudioPlayer(AudioPlayer);

    // это для обработки ref
    jest.spyOn(React, `createRef`).mockImplementation(() => ref);

    const audioPlayer = mount(<MockComponentWrapped {...props} />);

    audioPlayer.instance()._onPlayButtonClick();
    expect(audioPlayer.state().isPlaying).toEqual(true);

    audioPlayer.instance()._onPlayButtonClick();
    expect(audioPlayer.state().isPlaying).toEqual(false);
  });
});
