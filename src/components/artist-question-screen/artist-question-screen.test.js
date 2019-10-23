import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen.jsx";
import {questions} from "../../mocks/questions.js";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const CURRENT_INDEX = questions.find(({type}) => type === `artist`);
    const clickHandler = jest.fn();
    const tree = renderer
      .create(
          <ArtistQuestionScreen
            questions = {questions[CURRENT_INDEX]}
            screenIndex = {CURRENT_INDEX}
            onAnswer = {clickHandler}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
