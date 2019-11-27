import * as React from "react";
import * as renderer from "react-test-renderer";
import GameResultSuccess from "./game-result-success";

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));


describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      time: 50000,
      mistakes: 1,
      points: 10,
      quickAnswerCount: 4,
      restartGame: jest.fn()
    };

    const tree = renderer
      .create(<GameResultSuccess {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
