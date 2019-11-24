import React from 'react';
import {shallow} from 'enzyme';
import ArtistQuestionScreen from "./artist-question-screen.jsx";
import {questions} from "../../__fixtures__/questions.js";

describe(`end to end test`, () => {
  it(`Callback func calls with correct data`, () => {
    const userAnswerHandler = jest.fn();
    const renderPlayerHandler = jest.fn();
    const resetPlayerHandler = jest.fn();
    const currentQuestion = questions.find((question) => question.type === `artist`);
    const evt = {
      target: {
        value: `John Snow`
      }
    };
    const props = {
      questions: currentQuestion,
      screenIndex: 0,
      onAnswer: userAnswerHandler,
      renderPlayer: renderPlayerHandler,
      resetActivePlayerValue: resetPlayerHandler
    };

    const app = shallow(<ArtistQuestionScreen {...props} />);
    const form = app.find(`.game__artist`);

    form.simulate(`change`, evt);
    expect(userAnswerHandler).toHaveBeenCalledWith(`John Snow`, expect.any(Number));
  });
});
