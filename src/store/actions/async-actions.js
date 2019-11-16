import ActionCreator from "./action-creator.js";

const Operation = {
  loadQuestions: () => (dispatch, _, api) => {
    return api.get(`/questions`)
      .then((response) => {
        dispatch(ActionCreator.loadQuestions(response.data));
      });
  },

  postUserLogin: (userData) => (dispatch, state, api) => {
    dispatch(ActionCreator.singInUser(userData));

    return api.post(`/login`, {
      email: state().user.email,
      password: state().user.password
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization());
      });
  }
};

export default Operation;
