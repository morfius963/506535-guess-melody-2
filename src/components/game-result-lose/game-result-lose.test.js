import React from "react";
import renderer from "react-test-renderer";
import GameResultLose from "./game-result-lose.jsx";

jest.mock(`react-router-dom`, () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
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
