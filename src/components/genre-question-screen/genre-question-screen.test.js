import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen.jsx";
import GameHeader from "../game-header/game-header";
import GenreAnswer from "../genre-answer/genre-answer.jsx";
import {questions} from "../../mocks/questions.js";

jest.mock(`../game-header/game-header.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../genre-answer/genre-answer.jsx`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const currentQuestion = questions.find((question) => question.type === `genre`);
    const clickHandler = jest.fn();
    const tree = renderer
      .create(
          <GenreQuestionScreen
            questions = {currentQuestion}
            screenIndex = {0}
            onAnswer = {clickHandler}
          />
      )
      .toJSON();
    expect(GameHeader).toHaveBeenCalled();
    expect(GenreAnswer).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
