import React from 'react';
import {shallow} from 'enzyme';
import ArtistQuestionScreen from "./artist-question-screen.jsx";
import {questions} from "../../__mocks__/questions.js";

describe(`end to end test`, () => {
  it(`Callback func calls with correct data`, () => {
    const clickHandler = jest.fn();
    const currentQuestion = questions.find((question) => question.type === `artist`);
    const evt = {
      target: {
        value: `John Snow`
      }
    };
    const app = shallow(
        <ArtistQuestionScreen
          questions = {currentQuestion}
          screenIndex = {0}
          onAnswer = {clickHandler}
        />
    );
    const form = app.find(`.game__artist`);

    form.simulate(`change`, evt);
    expect(clickHandler).toHaveBeenCalledWith(`John Snow`);
  });
});
