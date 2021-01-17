import axiosInstance from "../helper/Axios";
import { WorkbyidConstants } from "./constants";

export const workbyid = (workid) => {
  return async (dispatch) => {
    dispatch({ type: WorkbyidConstants.Workbyidrequest });
    await axiosInstance
      .get(`https://ababeeel.herokuapp.com/api/work/${workid}`)
      .then((res) => {
        if (res.status === 201) {
          const { work } = res.data;
          dispatch({
            type: WorkbyidConstants.Workbyidsuccess,
            payload: {
              work,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          dispatch({
            type: WorkbyidConstants.Workbyidfailure,
            payload: {
              message,
            },
          });
        }
      })
      .catch((error) => {});
  };
};
