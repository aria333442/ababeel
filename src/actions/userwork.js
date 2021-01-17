import axiosInstance from "../helper/Axios";
import { UserworkConstants } from "./constants";

export const userWork = () => {
  return async (dispatch) => {
    dispatch({ type: UserworkConstants.Userworkrequest });
    await axiosInstance
      .get("https://ababeeel.herokuapp.com/api/works")
      .then((res) => {
        if (res.status === 201) {
          const { works } = res.data;
          dispatch({
            type: UserworkConstants.Userworksuccess,
            payload: {
              works,
            },
          });
        } else if (res.status === 200) {
          const { err } = res.data;
          dispatch({
            type: UserworkConstants.Userworkfailure,
            payload: {
              message: err,
            },
          });
        }
      })
      .catch((error) => {});
  };
};
