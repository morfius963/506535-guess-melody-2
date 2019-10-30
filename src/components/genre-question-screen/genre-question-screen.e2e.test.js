import React from 'react';
import {shallow} from 'enzyme';
import GenreQuestionScreen from "./genre-question-screen.jsx";
import {questions} from "../../__fixtures__/questions.js";
import {makeAnswers} from "../../utils.js";

describe(`end to end test`, () => {
  it(`Callback func calls with correct data`, () => {
    const clickHandler = jest.fn();
    const currentQuestion = questions.find((question) => question.type === `genre`);
    const app = shallow(
        <GenreQuestionScreen
          questions = {currentQuestion}
          screenIndex = {0}
          onAnswer = {clickHandler}
        />
    );
    const form = app.find(`.game__tracks`);
    const expectedValue = makeAnswers(currentQuestion.answers);
    const evt = {
      preventDefault: () => {}
    };

    form.simulate(`submit`, evt);
    expect(clickHandler).toHaveBeenCalledWith(expectedValue);
  });
});
