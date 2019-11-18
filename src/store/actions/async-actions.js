import ActionCreator from "./action-creator.js";

const Operation = {
  loadQuestions: () => (dispatch, _, api) => {
    return api.get(`/questions`)
      .then((response) => {
        dispatch(ActionCreator.loadQuestions(response.data));
      });
  },

  postUserLogin: (userData, pushPath) => (dispatch, _, api) => {
    return api.post(`/login`, userData)
      .then((response) => {
        dispatch(ActionCreator.singInUser(response.data));
        pushPath();
      });
  }
};

export default Operation;
