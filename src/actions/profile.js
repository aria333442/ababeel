import axiosInstance from "../helper/Axios";
import { ProfileConstants } from "./constants";

export const profiles = () => {
  return async (dispatch) => {
    dispatch({ type: ProfileConstants.Profilerequest });
    await axiosInstance
      .get("https://ababeeel.herokuapp.com/api/profile")
      .then((res) => {
        if (res.status === 201) {
          const { profile } = res.data;
          dispatch({
            type: ProfileConstants.Profilesuccess,
            payload: {
              profile,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          dispatch({
            type: ProfileConstants.Profilefailure,
            payload: {
              message,
            },
          });
        }
      })
      .catch((error) => {});
  };
};
