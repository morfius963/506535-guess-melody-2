import {reducer} from "./reducer.js";

describe(`Reducer test group`, () => {
  it(`Reducer correctly increments step`, () => {
    expect(reducer(
        {
          questionStep: -1,
          mistakes: 0,
          time: 300000,
          gameTimer: null
        },
        {
          type: `INCREMENT_STEP`,
          payload: 1
        }
    )).toEqual({
      questionStep: 0,
      mistakes: 0,
      time: 300000,
      gameTimer: null
    });
  });

  it(`Reducer correctly increments mistakes`, () => {
    expect(reducer(
        {
          questionStep: 0,
          mistakes: 0,
          time: 300000,
          gameTimer: null
        },
        {
          type: `INCREMENT_MISTAKES`,
          payload: 2
        }
    )).toEqual({
      questionStep: 0,
      mistakes: 2,
      time: 300000,
      gameTimer: null
    });
  });

  it(`Reducer should correctly reset game`, () => {
    expect(reducer(
        {
          questionStep: 1232,
          mistakes: 213,
          time: 300000,
          gameTimer: null
        },
        {
          type: `RESET`
        }
    )).toEqual({
      questionStep: -1,
      mistakes: 0,
      time: 300000,
      gameTimer: null
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
      mistakes: 0,
      time: 300000,
      gameTimer: null
    });
  });

  it(`Reducer correctly decrements time`, () => {
    expect(reducer(
        {
          questionStep: -1,
          mistakes: 0,
          time: 300000,
          gameTimer: null
        },
        {
          type: `DECREMENT_TIME`,
          payload: 1000
        }
    )).toEqual({
      questionStep: -1,
      mistakes: 0,
      time: 299000,
      gameTimer: null
    });
  });
});
