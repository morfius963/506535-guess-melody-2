import {reducer} from "./reducer.js";

describe(`Reducer test group`, () => {
  it(`Reducer correctly increments step`, () => {
    expect(reducer(
        {
          questionStep: -1,
          mistakes: 0
        },
        {
          type: `INCREMENT_STEP`,
          payload: 1
        }
    )).toEqual({
      questionStep: 0,
      mistakes: 0
    });
  });

  it(`Reducer correctly increments mistakes`, () => {
    expect(reducer(
        {
          questionStep: -1,
          mistakes: 0
        },
        {
          type: `INCREMENT_MISTAKES`,
          payload: 2
        }
    )).toEqual({
      questionStep: -1,
      mistakes: 2
    });
  });

  it(`Reducer should correctly reset game`, () => {
    expect(reducer(
        {
          questionStep: 1232,
          mistakes: 213
        },
        {
          type: `RESET`
        }
    )).toEqual({
      questionStep: -1,
      mistakes: 0
    });
  });

  it(`Reducer correctly works with incorrect data`, () => {
    expect(reducer(
        undefined,
        {
          type: `etefdssf`
        }
    )).toEqual({
      questionStep: -1,
      mistakes: 0
    });
  });
});
