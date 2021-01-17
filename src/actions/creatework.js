import axiosInstance from "../helper/Axios";
import { CreateworkConstants } from "./constants";

export const createWork = (form) => {
  return async (dispatch) => {
    dispatch({ type: CreateworkConstants.Createworkrequest });
    await axiosInstance
      .post("https://ababeeel.herokuapp.com/api/creatework", {
        ...form,
      })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          dispatch({
            type: CreateworkConstants.Createworksuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          dispatch({
            type: CreateworkConstants.Createworkfailure,
            payload: {
              message,
            },
          });
        }
      })
      .catch((error) => {});
  };
};
