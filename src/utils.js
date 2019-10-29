export const makeAnswers = (arr) => arr.reduce((acc, {genre}) => {
  return Object.assign(
      {},
      acc,
      {
        [genre]: 0
      }
  );
}, {});
