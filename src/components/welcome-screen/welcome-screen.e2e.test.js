import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from "./welcome-scren.jsx";

Enzyme.configure({adapter: new Adapter()});

describe(`end to end test`, () => {
  it(`Click event correctly works on start button`, () => {
    const clickHandler = jest.fn();
    const app = shallow(
        <WelcomeScreen
          time = {0}
          errorCount = {0}
          onButtonClick = {clickHandler}
        />
    );
    const startButton = app.find(`.welcome__button`);

    startButton.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
