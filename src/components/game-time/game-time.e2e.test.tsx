import * as React from 'react';
import {shallow} from 'enzyme';
import {GameTime} from "../game-time/game-time";

describe(`end to end test`, () => {
  it(`Tick method correctly decrements time`, () => {
    const timeUpdateHandler = jest.fn();
    const timeEndHandler = jest.fn();
    const props = {
      time: 300000,
      onTimeEnd: timeEndHandler,
      onTimeUpdate: timeUpdateHandler,
      registrateTimer: jest.fn()
    };

    const app = shallow(<GameTime {...props} />);

    app.instance()._tick();
    expect(timeUpdateHandler).toHaveBeenCalledTimes(1);

    app.setProps({time: 0});
    app.instance()._tick();
    expect(timeEndHandler).toHaveBeenCalledTimes(1);
  });
});
