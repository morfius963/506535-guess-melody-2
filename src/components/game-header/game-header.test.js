import React from "react";
import renderer from "react-test-renderer";
import GameHeader from "./game-header.jsx";
import GameTime from "../game-time/game-time.jsx";
import GameMistakes from "../game-mistakes/game-mistakes.jsx";

jest.mock(`../game-time/game-time.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../game-mistakes/game-mistakes.jsx`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      time: 5000,
      onTimeEnd: jest.fn(),
      onTimeUpdate: jest.fn(),
      mistakes: 0,
      registrateTimer: jest.fn(),
      resetGame: jest.fn()
    };


    const tree = renderer
      .create(<GameHeader {...props} />)
      .toJSON();

    expect(GameTime).toHaveBeenCalled();
    expect(GameMistakes).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
