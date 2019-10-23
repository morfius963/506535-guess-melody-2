import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen.jsx";
import {questions} from "../../mocks/questions.js";

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
    expect(tree).toMatchSnapshot();
  });
});
