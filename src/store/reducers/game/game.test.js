import game from "./game.js";

describe(`Reducer test group`, () => {
  it(`Reducer correctly increments step`, () => {
    expect(game(
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
    expect(game(
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
      questionStep: 2,
      mistakes: 2,
      time: 300000,
      gameTimer: null
    });
  });

  it(`Reducer should correctly reset game`, () => {
    expect(game(
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
    expect(game(
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
    expect(game(
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
