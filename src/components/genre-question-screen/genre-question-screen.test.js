import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen.jsx";
import {questions} from "../../mocks/questions.js";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const CURRENT_INDEX = 0;
    const clickHandler = jest.fn();
    const tree = renderer
      .create(
          <GenreQuestionScreen
            questions = {questions[CURRENT_INDEX]}
            screenIndex = {CURRENT_INDEX}
            onAnswer = {clickHandler}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
