import React from "react";
import renderer from "react-test-renderer";
import ArtistAnswer from "./artist-answer.jsx";
import {questions} from "../../__mocks__/questions.js";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const currentQuestion = questions.find((question) => question.type === `artist`);
    const tree = renderer
      .create(
          <ArtistAnswer
            answer = {currentQuestion.answers[0]}
            id = {0}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
