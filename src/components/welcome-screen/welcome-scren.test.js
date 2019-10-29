import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-scren.jsx";

describe(`snapshot test`, () => {
  it(`App correctly renders`, () => {
    const clickHandler = jest.fn();
    const tree = renderer
      .create(
          <WelcomeScreen
            gameTime = {0}
            errorCount = {0}
            onButtonClick = {clickHandler}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
