import axios from "axios";
import ActionCreator from "./store/actions/action-creator.js";

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/guess-melody`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFali = (err) => {
    // requireAuthorization добавити
    if (err.response.status === 403) {
      dispatch(ActionCreator.requireAuthorization());
    }

    return err;
  };

  api.interceptors.response.use(onSuccess, onFali);

  return api;
};

export default createAPI;
