import React from "react";
import renderer from "react-test-renderer";
import GameHeader from "./game-header.jsx";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const tree = renderer
      .create(<GameHeader />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
