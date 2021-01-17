import { AllconvoConstants } from "../actions/constants";
import axiosInstance from "../helper/Axios";
export const allvonvo = () => {
  return async (dispatch) => {
    dispatch({ type: AllconvoConstants.Allconvorequest });
    await axiosInstance
      .get("https://ababeeel.herokuapp.com/api/allconvo")
      .then((res) => {
        const { convos } = res.data;
        if (res.status === 201) {
          dispatch({
            type: AllconvoConstants.Allconvosuccess,
            payload: {
              convos,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          dispatch({
            type: AllconvoConstants.Allconvofailure,
            payload: {
              message,
            },
          });
        }
      });
  };
};
