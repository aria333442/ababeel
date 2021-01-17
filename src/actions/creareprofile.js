import axiosInstance from "../helper/Axios";
import { CreateprofileConstants } from "./constants";

export const createProfiles = (form) => {
  return async (dispatch) => {
    dispatch({ type: CreateprofileConstants.Createprofilerequest });
    await axiosInstance
      .post("https://ababeeel.herokuapp.com/api/createprofile", {
        ...form,
      })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          dispatch({
            type: CreateprofileConstants.Createprofilesuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          dispatch({
            type: CreateprofileConstants.Createprofilefailure,
            payload: {
              message,
            },
          });
        }
      })
      .catch((error) => {});
  };
};
