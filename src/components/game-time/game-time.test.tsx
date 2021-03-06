import * as React from "react";
import * as renderer from "react-test-renderer";
import {GameTime} from "../game-time/game-time";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      time: 5000,
      onTimeEnd: jest.fn(),
      onTimeUpdate: jest.fn(),
      registrateTimer: jest.fn()
    };

    const tree = renderer
      .create(<GameTime {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
