import axiosInstance from "../helper/Axios";
import { ProfilebyidConstants } from "./constants";
import axios from "axios";

export const profilebyId = (userid) => {
  return async (dispatch) => {
    dispatch({ type: ProfilebyidConstants.Profilebyidrequest });
    const res = await axiosInstance.get(
      `https://ababeeel.herokuapp.com/api/user/profile/${userid}`
    );
    if (res.status === 201) {
      const { profile } = res.data;
      dispatch({
        type: ProfilebyidConstants.Profilebyidsuccess,
        payload: {
          profile,
        },
      });
    } else if (res.status === 400) {
      dispatch({
        type: ProfilebyidConstants.Profilebyidfailure,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
