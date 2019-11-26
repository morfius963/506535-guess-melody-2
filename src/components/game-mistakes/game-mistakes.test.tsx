import React from "react";
import renderer from "react-test-renderer";
import GameMistakes from "./game-mistakes.jsx";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      mistakes: 3
    };

    const tree = renderer
      .create(<GameMistakes {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
