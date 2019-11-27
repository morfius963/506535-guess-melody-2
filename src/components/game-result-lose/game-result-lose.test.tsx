import * as React from "react";
import * as renderer from "react-test-renderer";
import GameResultLose from "./game-result-lose";

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      result: `mistakes`,
      restartGame: jest.fn()
    };

    const tree = renderer
      .create(<GameResultLose {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
