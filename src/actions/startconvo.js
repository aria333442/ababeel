import { StartconvoConstants } from "../actions/constants";
import axiosInstance from "../helper/Axios";
export const startconvos = (id) => {
  return async (dispatch) => {
    dispatch({
      type: StartconvoConstants.Startconvorequest,
    });
    await axiosInstance
      .post(`https://ababeeel.herokuapp.com/api/startconvo/${id}`)
      .then((res) => {
        const { message } = res.data;
        if (res.status === 201) {
          dispatch({
            type: StartconvoConstants.Startconvosuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          dispatch({
            type: StartconvoConstants.Startconvofailure,
            payload: {
              message,
            },
          });
        }
      })
      .catch((error) => {});
  };
};
