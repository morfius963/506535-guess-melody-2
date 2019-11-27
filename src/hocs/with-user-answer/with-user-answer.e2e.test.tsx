import * as React from 'react';
import {shallow} from 'enzyme';
import withUserAnswer from "./with-user-answer";
import {fixtureData} from "../../__fixtures__/questions";

describe(`end to end test`, () => {
  it(`Rendered checkboxes are synchronized with state`, () => {
    const props = {
      questions: fixtureData,
      screenIndex: 1,
      onAnswer: jest.fn()
    }
    const evt1 = {
      target: {
        value: `test-1`,
        checked: true
      }
    };
    const evt2 = {
      target: {
        value: `test-3`,
        checked: true
      }
    };
    const mockComponent = () => <div></div>;
    const MockComponentWrapped = withUserAnswer(mockComponent);

    const app = shallow(<MockComponentWrapped {...props} />);

    app.instance()._checkboxChangeHandler(evt1);
    expect(app.state().userAnswer).toEqual([false, true, false, false]);

    app.instance()._checkboxChangeHandler(evt2);
    expect(app.state().userAnswer).toEqual([false, true, false, true]);

    app.instance()._setDefaultStateValue();
    expect(app.state().userAnswer).toEqual([false, false, false, false]);
  });
});
