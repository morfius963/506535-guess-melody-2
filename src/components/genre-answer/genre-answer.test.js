import React from "react";
import renderer from "react-test-renderer";
import GenreAnswer from "./genre-answer.jsx";
import {questions} from "../../__fixtures__/questions.js";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const eventHandler = jest.fn();
    const currentQuestion = questions.find((question) => question.type === `genre`);
    const tree = renderer
      .create(
          <GenreAnswer
            answer = {currentQuestion.answers[0]}
            id = {0}
            checkboxChangeHandler = {eventHandler}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
