import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-scren.jsx";

describe(`snapshot test`, () => {
  it(`App correctly renders`, () => {
    const props = {
      gameTime: 0,
      errorCount: 0,
      onButtonClick: jest.fn()
    };

    const tree = renderer
      .create(<WelcomeScreen {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
