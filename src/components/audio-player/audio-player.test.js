import React from "react";
import renderer from "react-test-renderer";
import {questions} from "../../__mocks__/questions.js";
import AudioPlayer from "../audio-player/audio-player.jsx";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const currentQuestion = questions.find((question) => question.type === `artist`);
    const clickHandler = jest.fn();
    const tree = renderer
      .create(
          <AudioPlayer
            src={currentQuestion.song.src}
            isPlaying={false}
            onPlayButtonClick={clickHandler}
          />,
          {
            createNodeMock: () => {
              return {
                oncanplaythrough: null,
                onplay: null,
                onpause: null,
                ontimeupdate: null,
                src: ``
              };
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
