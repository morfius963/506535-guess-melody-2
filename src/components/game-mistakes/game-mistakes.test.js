import React from "react";
import renderer from "react-test-renderer";
import GameMistakes from "./game-mistakes.jsx";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const tree = renderer
      .create(
          <GameMistakes
            mistakes={3}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
