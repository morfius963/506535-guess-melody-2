import React from 'react';
import {shallow} from 'enzyme';
import WelcomeScreen from "./welcome-scren.jsx";

describe(`end to end test`, () => {
  it(`Click event correctly works on start button`, () => {
    const clickHandler = jest.fn();
    const props = {
      gameTime: 0,
      errorCount: 0,
      onButtonClick: clickHandler,
    };

    const app = shallow(<WelcomeScreen {...props} />);
    const startButton = app.find(`.welcome__button`);

    startButton.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
