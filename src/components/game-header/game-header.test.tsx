import * as React from "react";
import * as renderer from "react-test-renderer";
import GameHeader from "./game-header";
import GameTime from "../game-time/game-time";
import GameMistakes from "../game-mistakes/game-mistakes";

jest.mock(`../game-time/game-time`, () => jest.fn().mockReturnValue(null));
jest.mock(`../game-mistakes/game-mistakes`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      mistakes: 0,
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
