import Operation from "../../actions/async-actions.js";
import createAPI from "../../../api.js";
import MockAdapter from "axios-mock-adapter";

describe(`load data test group`, () => {
  it(`Should make a correct call to /questions`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const questionLoader = Operation.loadQuestions();

    apiMock
      .onGet(`/questions`)
      .reply(200, [{lul: true}]);

    return questionLoader(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_QUESTIONS`,
          payload: {
            questions: [{lul: true}],
            isLoading: false
          }
        });
      });
  });
});
