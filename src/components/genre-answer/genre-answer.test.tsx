import * as React from "react";
import * as renderer from "react-test-renderer";
import GenreAnswer from "./genre-answer";
import {questions} from "../../__fixtures__/questions";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const currentQuestion = questions.find((question) => question.type === `genre`);
    const props = {
      answer: currentQuestion.answers[0],
      id: 0,
      checkboxChangeHandler: jest.fn(),
      children: <div></div>
    };

    const tree = renderer
      .create(<GenreAnswer {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
