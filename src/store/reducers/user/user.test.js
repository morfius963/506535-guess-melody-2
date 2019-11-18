import user from "./user.js";

describe(`Reducer test group`, () => {
  const initialAppState = {
    isAuthorizationRequired: true,
    email: ``
  };

  it(`Reducer should correctly change user data`, () => {
    expect(user(
        initialAppState,
        {
          type: `SING_IN_USER`,
          payload: {
            email: `morf@gmail`,
            requireAuthorization: false
          }
        }))
      .toEqual({
        isAuthorizationRequired: false,
        email: `morf@gmail`
      });
  });

  it(`Reducer should correctly works with incorrect data`, () => {
    expect(user(
        undefined,
        {
          type: `QWEQWESDA`,
          payload: ``
        }))
      .toEqual(initialAppState);
  });
});
