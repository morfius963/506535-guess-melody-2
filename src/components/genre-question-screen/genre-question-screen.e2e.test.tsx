import * as React from 'react';
import {mount} from 'enzyme';
import GenreQuestionScreen from "./genre-question-screen";
import {questions} from "../../__fixtures__/questions";

const currentQuestion = questions.find((question) => question.type === `genre`);

describe(`end to end test`, () => {
  it(`Callback func calls with correct data`, () => {
    const asnwerHandler = jest.fn();
    const renderPlayerHandler = jest.fn();
    const changeHandler = jest.fn();
    const resetAnswerHandler = jest.fn();
    const resetPlayerHandler = jest.fn();
    const userAnswerValue = [false, false, false, false];
    const props = {
      questions: currentQuestion,
      screenIndex: 0,
      onAnswer: asnwerHandler,
      renderPlayer: renderPlayerHandler,
      onChange: changeHandler,
      resetUserAnswer: resetAnswerHandler,
      userAnswer: userAnswerValue,
      resetActivePlayerValue: resetPlayerHandler,
    };
    const evt = {
      preventDefault: () => {}
    };

    const app = mount(<GenreQuestionScreen {...props} />);
    const form = app.find(`.game__tracks`);

    form.simulate(`submit`, evt);
    expect(asnwerHandler).toHaveBeenCalledWith(userAnswerValue, expect.any(Number));
    expect(resetAnswerHandler).toHaveBeenCalled();
  });
});
