import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen.jsx";
import GenreAnswer from "../genre-answer/genre-answer.jsx";
import {questions} from "../../__fixtures__/questions.js";

jest.mock(`../genre-answer/genre-answer.jsx`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const currentQuestion = questions.find((question) => question.type === `genre`);
    const props = {
      questions: currentQuestion,
      screenIndex: 0,
      onAnswer: jest.fn(),
      renderPlayer: jest.fn(),
      onChange: jest.fn(),
      resetUserAnswer: jest.fn(),
      resetActivePlayerValue: jest.fn(),
      userAnswer: [false, false, false, false],
    };

    const tree = renderer
      .create(<GenreQuestionScreen {...props} />)
      .toJSON();

    expect(GenreAnswer).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
