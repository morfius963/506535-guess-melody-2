import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen.jsx";
import GameHeader from "../game-header/game-header";
import ArtistAnswer from "../artist-answer/artist-answer";
import {questions} from "../../__fixtures__/questions.js";
import AudioPlayer from "../audio-player/audio-player.jsx";

jest.mock(`../game-header/game-header`, () => jest.fn().mockReturnValue(null));
jest.mock(`../artist-answer/artist-answer`, () => jest.fn().mockReturnValue(null));
jest.mock(`../audio-player/audio-player.jsx`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const currentQuestion = questions.find((question) => question.type === `artist`);
    const clickHandler = jest.fn();
    const tree = renderer
      .create(
          <ArtistQuestionScreen
            questions = {currentQuestion}
            screenIndex = {0}
            onAnswer = {clickHandler}
          />
      )
      .toJSON();
    expect(GameHeader).toHaveBeenCalled();
    expect(ArtistAnswer).toHaveBeenCalled();
    expect(AudioPlayer).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
