import * as React from "react";
import * as renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen";
import ArtistAnswer from "../artist-answer/artist-answer";
import {questions} from "../../__fixtures__/questions";

jest.mock(`../artist-answer/artist-answer`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const currentQuestion = questions.find((question) => question.type === `artist`);
    const props = {
      questions: currentQuestion,
      screenIndex: 0,
      onAnswer: jest.fn(),
      renderPlayer: jest.fn(),
      resetActivePlayerValue: jest.fn(),
    };

    const tree = renderer
      .create(<ArtistQuestionScreen {...props}/>)
      .toJSON();

    expect(ArtistAnswer).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
