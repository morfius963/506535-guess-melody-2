import React from 'react';
import {shallow} from 'enzyme';
import withActivePlayer from "./with-active-player.jsx";

describe(`end to end test`, () => {
  it(`Active audio player should change after click`, () => {
    const mockComponent = () => <div></div>;
    const MockComponentWrapped = withActivePlayer(mockComponent);

    const app = shallow(<MockComponentWrapped />);

    app.instance()._buttonClickHandler(0);
    expect(app.state().activePlayer).toEqual(0);

    app.instance()._buttonClickHandler(1);
    expect(app.state().activePlayer).toEqual(1);

    app.instance()._buttonClickHandler(1);
    expect(app.state().activePlayer).toEqual(-1);

    app.instance()._setDefaultStateValue();
    expect(app.state().activePlayer).toEqual(-1);
  });
});
