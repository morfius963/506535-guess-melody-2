import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen.jsx";
import {questions} from "../../mocks/questions.js";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const mockNullComponent = jest.fn().mockReturnValue(null);
    jest.mock(`../game-header/game-header.jsx`, () => mockNullComponent);
    jest.mock(`../artist-answer/artist-answer.jsx`, () => mockNullComponent);

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
    expect(tree).toMatchSnapshot();
  });
});
