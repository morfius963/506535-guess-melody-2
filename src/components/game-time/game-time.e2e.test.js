import React from 'react';
import {shallow} from 'enzyme';
import GameTime from "../game-time/game-time.jsx";

describe(`end to end test`, () => {
  it(`Tick method correctly decrements time`, () => {
    const timeUpdateHandler = jest.fn();
    const timeEndHandler = jest.fn();
    const app = shallow(
        <GameTime
          time={300000}
          onTimeEnd={timeEndHandler}
          onTimeUpdate={timeUpdateHandler}
          registrateTimer={jest.fn()}
        />
    );

    app.instance()._tick();
    expect(timeUpdateHandler).toHaveBeenCalledTimes(1);

    app.setProps({time: 0});
    app.instance()._tick();
    expect(timeEndHandler).toHaveBeenCalledTimes(1);
  });
});
