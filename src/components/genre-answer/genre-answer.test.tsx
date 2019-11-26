import React from "react";
import renderer from "react-test-renderer";
import GenreAnswer from "./genre-answer.jsx";
import {questions} from "../../__fixtures__/questions.js";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const currentQuestion = questions.find((question) => question.type === `genre`);
    const props = {
      answer: currentQuestion.answers[0],
      id: 0,
      checkboxChangeHandler: jest.fn()
    };

    const tree = renderer
      .create(<GenreAnswer {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
