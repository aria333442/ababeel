import { SearchConstants } from "../actions/constants";
import axiosInstance from "../helper/Axios";

export const search = (query1) => {
  return async (dispatch) => {
    dispatch({ type: SearchConstants.Searchrequest });
    await axiosInstance
      .get(`https://ababeeel.herokuapp.com/api/work?query=${query1}`)
      .then((res) => {
        const { works } = res.data;
        if (res.status === 201) {
          dispatch({
            type: SearchConstants.Searchsuccess,
            payload: {
              works,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          dispatch({
            type: SearchConstants.Searchfailure,
            payload: {
              message,
            },
          });
        }
      })
      .catch((error) => {});
  };
};
