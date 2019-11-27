import * as React from "react";
import * as renderer from "react-test-renderer";
import ArtistAnswer from "./artist-answer";
import {questions} from "../../__fixtures__/questions";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const currentQuestion = questions.find((question) => question.type === `artist`);
    const props = {
      answer: currentQuestion.answers[0],
      id: 0
    };

    const tree = renderer
      .create(<ArtistAnswer {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
