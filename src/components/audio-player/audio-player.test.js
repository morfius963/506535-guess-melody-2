import React from "react";
import renderer from "react-test-renderer";
import {questions} from "../../__fixtures__/questions.js";
import AudioPlayer from "../audio-player/audio-player.jsx";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const currentQuestion = questions.find((question) => question.type === `artist`);
    const ref = {
      current: document.createElement(`audio`)
    };
    const props = {
      src: currentQuestion.song.src,
      isPlaying: false,
      isLoading: false,
      onPlayButtonClick: jest.fn(),
      audioRef: ref,
      id: 0
    };
    const createNodeMock = () => {
      return {
        oncanplaythrough: null,
        onplay: null,
        onpause: null,
        ontimeupdate: null,
        src: ``
      };
    };

    const tree = renderer
      .create(<AudioPlayer {...props} />, {createNodeMock})
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
