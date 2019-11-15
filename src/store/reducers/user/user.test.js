import user from "./user.js";

describe(`Reducer test group`, () => {
  const initialAppState = {
    isAuthorizationRequired: false,
    email: ``,
    password: ``
  };

  it(`Reducer should correctly change authorization state`, () => {
    expect(user(initialAppState, {
      type: `REQUIRE_AUTHORIZATION`,
      payload: true
    }))
      .toEqual({
        isAuthorizationRequired: true,
        email: ``,
        password: ``
      });
  });

  it(`Reducer should correctly change user data`, () => {
    expect(user(initialAppState, {
      type: `SING_UP_USER`,
      payload: {
        email: `lol`,
        password: `123`
      }
    }))
      .toEqual({
        isAuthorizationRequired: false,
        email: `lol`,
        password: `123`
      });
  });

  it(`Reducer should correctly works with incorrect data`, () => {
    expect(user(undefined, {
      type: `QWEQWESDA`,
      payload: ``
    }))
      .toEqual(initialAppState);
  });
});
