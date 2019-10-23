import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen.jsx";
import {questions} from "../../mocks/questions.js";

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
    expect(tree).toMatchSnapshot();
  });
});
