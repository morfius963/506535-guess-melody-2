import game from "./game.js";

describe(`Reducer test group`, () => {
  const initialState = {
    questionStep: -1,
    mistakes: 0,
    time: 300000,
    gameTimer: null,
    gameResult: ``
  };

  it(`Reducer correctly increments step`, () => {
    expect(game(
        initialState,
        {
          type: `INCREMENT_STEP`,
          payload: 1
        }
    )).toEqual({
      questionStep: 0,
      mistakes: 0,
      time: 300000,
      gameTimer: null,
      gameResult: ``
    });
  });

  it(`Reducer correctly increments mistakes`, () => {
    expect(game(
        initialState,
        {
          type: `INCREMENT_MISTAKES`,
          payload: 1
        }
    )).toEqual({
      questionStep: 0,
      mistakes: 1,
      time: 300000,
      gameTimer: null,
      gameResult: ``
    });
  });

  it(`Reducer should correctly reset game`, () => {
    expect(game(
        initialState,
        {
          type: `RESET`
        }
    )).toEqual({
      questionStep: -1,
      mistakes: 0,
      time: 300000,
      gameTimer: null,
      gameResult: ``
    });
  });

  it(`Reducer correctly works with incorrect data`, () => {
    expect(game(
        undefined,
        {
          type: `etefdssf`
        }
    )).toEqual(initialState);
  });

  it(`Reducer should correctly decrements time`, () => {
    expect(game(
        initialState,
        {
          type: `RESTART_GAME`,
          payload: {
            questionStep: 0
          }
        }
    )).toEqual({
      questionStep: 0,
      mistakes: 0,
      time: 300000,
      gameTimer: null,
      gameResult: ``
    });
  });

  it(`Reducer should correctly start new game`, () => {
    expect(game(
        initialState,
        {
          type: `DECREMENT_TIME`,
          payload: 1000
        }
    )).toEqual({
      questionStep: -1,
      mistakes: 0,
      time: 299000,
      gameTimer: null,
      gameResult: ``
    });
  });

  it(`Reducer should correctly change state when time ends`, () => {
    expect(game(
        {
          questionStep: 5,
          mistakes: 2,
          time: 125000,
          gameTimer: 3,
          gameResult: ``
        },
        {
          type: `RESULT_LOSE_TIME`,
          payload: `lose-time`
        }
    )).toEqual({
      questionStep: -1,
      mistakes: 2,
      time: 125000,
      gameTimer: 3,
      gameResult: `lose-time`
    });
  });
});
