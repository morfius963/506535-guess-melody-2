import React from "react";
import renderer from "react-test-renderer";
import GameResultSuccess from "./game-result-success.jsx";

jest.mock(`react-router-dom`, () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      time: 50000,
      mistakes: 1,
      restartGame: jest.fn()
    };

    const tree = renderer
      .create(<GameResultSuccess {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
