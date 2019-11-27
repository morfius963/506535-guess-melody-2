import * as React from "react";
import * as renderer from "react-test-renderer";
import AuthorizationScreen from "./authorization-screen";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      formSubmitHandler: jest.fn(),
      userInputHandler: jest.fn()
    };

    const tree = renderer
      .create(<AuthorizationScreen {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
